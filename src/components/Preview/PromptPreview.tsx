import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Typography, Button, message, Divider } from 'antd';
import { CopyOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { usePromptBuilder } from '../../context/PromptContext';

const { Title, Text } = Typography;

export const PromptPreview: React.FC = () => {
    const { generatedPrompt, isPremiumUser, togglePremiumMode, subject, currentEngine, generatedNegativePrompt } = usePromptBuilder();
    const { t } = useTranslation();

    const handleCopy = (text: string) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        message.success(t('sections.copied'));
    };

    return (
        <Card
            title={<Title level={4} style={{ margin: 0 }}>{t('sections.finalPrompt')}</Title>}
            bordered={false}
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}
        >
            {/* Main Prompt */}
            <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    fontSize: '16px',
                    padding: '16px',
                    background: '#141414',
                    border: '1px solid #303030',
                    borderRadius: '8px',
                    minHeight: '120px',
                    whiteSpace: 'pre-wrap',
                    marginBottom: '8px',
                    color: '#e6f7ff'
                }}>
                    {generatedPrompt || <Text type="secondary">{t('sections.empty')}</Text>}
                </div>
                <Button
                    type="primary"
                    icon={<CopyOutlined />}
                    block
                    size="large"
                    onClick={() => handleCopy(generatedPrompt)}
                    disabled={!generatedPrompt && !subject}
                >
                    {t('sections.copy')}
                </Button>
            </div>

            {/* Negative Prompt (SD only) */}
            {currentEngine.id === 'stable_diffusion' && (
                <div style={{ marginBottom: 24 }}>
                    <Title level={5} style={{ color: '#ff7875' }}>Negative Prompt</Title>
                    <div style={{
                        fontSize: '14px',
                        padding: '12px',
                        background: '#2a1215',
                        border: '1px solid #5c0011',
                        borderRadius: '8px',
                        color: '#ffa39e',
                        marginBottom: '8px',
                        minHeight: '60px'
                    }}>
                        {generatedNegativePrompt || <span style={{ opacity: 0.5 }}>None</span>}
                    </div>
                    <Button
                        ghost
                        danger
                        icon={<CopyOutlined />}
                        block
                        size="small"
                        onClick={() => handleCopy(generatedNegativePrompt)}
                        disabled={!generatedNegativePrompt}
                    >
                        Copy Negative
                    </Button>
                </div>
            )}

            <div style={{ marginTop: 'auto' }}>
                <Divider>{t('sections.demoTools')}</Divider>
                <div style={{ padding: '12px', background: 'rgba(250, 173, 20, 0.1)', borderRadius: '8px', border: '1px solid #d48806' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <Text strong style={{ color: '#faad14' }}><ThunderboltOutlined /> {t('app.premiumMode')}</Text>
                        <Button
                            size="small"
                            type={isPremiumUser ? 'primary' : 'default'}
                            danger={isPremiumUser}
                            onClick={togglePremiumMode}
                        >
                            {isPremiumUser ? t('app.toggleOn') : t('app.toggleOff')}
                        </Button>
                    </div>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                        {t('app.unlockPremium')}
                    </Text>
                </div>
            </div>
        </Card>
    );
};
