import React from 'react';
import { Typography } from 'antd';
import { OptionGrid } from './OptionGrid';
import { usePromptBuilder } from '../../context/PromptContext';
import { type EngineCategory } from '../../data/engines';

const { Text, Title } = Typography;

export const CategoryTabs: React.FC = () => {
    const { currentEngine, selectedLevel } = usePromptBuilder();

    // Helper to filter options by level
    const getVisibleOptions = (category: EngineCategory) => {
        return category.options.filter(o => {
            const levels = ['beginner', 'intermediate', 'expert'];
            const optionLevelIndex = levels.indexOf(o.level);
            return (optionLevelIndex + 1) <= selectedLevel;
        });
    };

    return (
        <div style={{ height: '100%', overflowY: 'auto', paddingRight: '8px' }}>
            {currentEngine.categories.map((category) => {
                const visibleOptions = getVisibleOptions(category);
                if (visibleOptions.length === 0) return null;

                return (
                    <div key={category.id} style={{ marginBottom: '40px' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <Title level={5} style={{ margin: 0, color: '#eb2f96' }}>
                                {category.name}
                            </Title>
                            {category.description && (
                                <Text type="secondary" style={{ fontSize: '13px' }}>
                                    {category.description}
                                </Text>
                            )}
                        </div>

                        <OptionGrid
                            options={visibleOptions}
                            categoryId={category.id}
                        />
                    </div>
                );
            })}
        </div>
    );
};
