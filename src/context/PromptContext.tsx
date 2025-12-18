import React, { createContext, useContext, useState, type ReactNode, useEffect } from 'react';
import { type Engine, type EngineOption, ENGINES } from '../data/engines';

interface SelectedOption extends EngineOption {
    categoryId: string;
}

interface PromptContextType {
    subject: string;
    setSubject: (text: string) => void;
    negativePrompt: string;
    setNegativePrompt: (text: string) => void;

    selectedEngineId: string;
    setSelectedEngineId: (id: string) => void;
    currentEngine: Engine;

    selectedOptionIds: string[]; // We'll store concatenated "categoryId:optionValue" or similar uniquely identifiable string
    toggleOption: (option: EngineOption, categoryId: string) => void;
    isOptionSelected: (option: EngineOption, categoryId: string) => boolean;

    isPremiumUser: boolean;
    togglePremiumMode: () => void;

    generatedPrompt: string;
    generatedNegativePrompt: string;
    selectedLevel: number;
    setSelectedLevel: (level: number) => void;
}

const PromptContext = createContext<PromptContextType | undefined>(undefined);

export const PromptProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [subject, setSubject] = useState('');
    const [negativePrompt, setNegativePrompt] = useState('');
    const [selectedEngineId, setSelectedEngineId] = useState<string>(ENGINES[0].id);
    // Store selected options as unique strings keys: `${categoryId}::${optionValue}`
    const [selectedOptionKeys, setSelectedOptionKeys] = useState<string[]>([]);

    const [isPremiumUser, setIsPremiumUser] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState<number>(1);

    const currentEngine = ENGINES.find(e => e.id === selectedEngineId) || ENGINES[0];

    // Reset options when engine changes
    useEffect(() => {
        setSelectedOptionKeys([]);
        setNegativePrompt('');
    }, [selectedEngineId]);

    const getOptionKey = (categoryId: string, value: string) => `${categoryId}::${value}`;

    const isOptionSelected = (option: EngineOption, categoryId: string) => {
        return selectedOptionKeys.includes(getOptionKey(categoryId, option.value));
    };

    const toggleOption = (option: EngineOption, categoryId: string) => {
        if (option.type === 'premium' && !isPremiumUser) {
            return;
        }

        const key = getOptionKey(categoryId, option.value);
        const category = currentEngine.categories.find(c => c.id === categoryId);

        if (!category) return;

        setSelectedOptionKeys(prev => {
            const isSelected = prev.includes(key);

            // Handle single select behavior if UI type is 'select'
            if (category.ui_type === 'select') {
                // Remove other options from same category if strictly select
                // But wait, user might want to unselect.
                const otherOptionsInCat = category.options.map(o => getOptionKey(categoryId, o.value));
                const filtered = prev.filter(k => !otherOptionsInCat.includes(k));
                return isSelected ? filtered : [...filtered, key];
            }

            // Default multi-select behavior (tags_input, multi_select, etc)
            if (isSelected) {
                return prev.filter(k => k !== key);
            } else {
                return [...prev, key];
            }
        });
    };

    const getPrompt = () => {
        // Collect all selected options with their full data
        const activeOptions: SelectedOption[] = [];

        currentEngine.categories.forEach(cat => {
            cat.options.forEach(opt => {
                if (selectedOptionKeys.includes(getOptionKey(cat.id, opt.value))) {
                    activeOptions.push({ ...opt, categoryId: cat.id });
                }
            });
        });

        const prefix = currentEngine.syntax_prefix ? currentEngine.syntax_prefix + ' ' : '';
        let mainContent = subject.trim();

        if (currentEngine.id === 'midjourney') {
            // MJ Logic: Prefix + Subject + [Options...] + [Suffixes]
            // We differentiate 'mj_parameters' (suffixes) from others

            const suffixes: string[] = [];
            const descriptors: string[] = [];

            activeOptions.forEach(opt => {
                if (opt.categoryId === 'mj_parameters') {
                    suffixes.push(opt.value);
                } else {
                    descriptors.push(opt.value);
                }
            });

            if (descriptors.length > 0) {
                mainContent += (mainContent ? ', ' : '') + descriptors.join(', ');
            }

            let final = prefix + mainContent;
            if (suffixes.length > 0) {
                final += ' ' + suffixes.join(' ');
            }
            return final.trim();

        } else if (currentEngine.id === 'stable_diffusion') {
            // SD Logic: Subject + [Quality Boosters] + [Art Styles] + [Technical]
            // EXCLUDE sd_negative_prompts from here.

            const tokens = [mainContent];
            activeOptions.forEach(opt => {
                if (opt.categoryId !== 'sd_negative_prompts') {
                    tokens.push(opt.value);
                }
            });

            // Filter empty tokens
            return tokens.filter(t => t).join(', ').trim();

        } else if (currentEngine.id === 'dalle_3') {
            // DALL-E 3 Logic
            let prompt = prefix + mainContent;

            const chunks = activeOptions.map(o => o.value);
            if (chunks.length > 0) {
                if (prompt && !prompt.match(/[.!?]$/)) prompt += '.';
                prompt += ' ' + chunks.join(' ');
            }

            return prompt.trim();
        }

        return mainContent;
    };

    const getNegativePrompt = () => {
        if (currentEngine.id !== 'stable_diffusion') return '';

        let neg = negativePrompt.trim(); // Manual input

        // Find selected options for negative categories
        currentEngine.categories.forEach(cat => {
            if (cat.id === 'sd_negative_prompts') {
                cat.options.forEach(opt => {
                    if (selectedOptionKeys.includes(getOptionKey(cat.id, opt.value))) {
                        neg += (neg ? ', ' : '') + opt.value;
                    }
                });
            }
        });

        return neg;
    };

    return (
        <PromptContext.Provider value={{
            subject,
            setSubject,
            negativePrompt,
            setNegativePrompt,
            selectedEngineId,
            setSelectedEngineId,
            currentEngine,
            selectedOptionIds: selectedOptionKeys,
            toggleOption,
            isOptionSelected,
            isPremiumUser,
            togglePremiumMode: () => setIsPremiumUser(prev => !prev),
            generatedPrompt: getPrompt(),
            generatedNegativePrompt: getNegativePrompt(),
            selectedLevel,
            setSelectedLevel
        }}>
            {children}
        </PromptContext.Provider>
    );
};

export const usePromptBuilder = () => {
    const context = useContext(PromptContext);
    if (!context) {
        throw new Error('usePromptBuilder must be used within a PromptProvider');
    }
    return context;
};

