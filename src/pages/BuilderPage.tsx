import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Input, Typography, Card, Segmented, ConfigProvider } from 'antd';
import { usePromptBuilder } from '../context/PromptContext';
import { CategoryTabs } from '../components/Builder/CategoryTabs';
import { PromptPreview } from '../components/Preview/PromptPreview';
import { ENGINES } from '../data/engines';

const { TextArea } = Input;
const { Title, Text } = Typography;

export const BuilderPage: React.FC = () => {
    const { subject, setSubject, selectedLevel, setSelectedLevel, currentEngine, negativePrompt, setNegativePrompt, setSelectedEngineId } = usePromptBuilder();
    const { t } = useTranslation();

    return (
        <Row gutter={[24, 24]} style={{ height: 'calc(100vh - 112px)' }}>
            {/* Left Column: Builder */}
            <Col xs={24} lg={16} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                {/* Top: Engine Selector & Subject */}
                <Card bordered={false} style={{ marginBottom: 24 }}>
                    <div style={{ marginBottom: 24 }}>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Segmented: {
                                        itemSelectedBg: '#eb2f96',
                                        itemSelectedColor: '#fff',
                                    },
                                },
                            }}
                        >
                            <Segmented
                                block
                                size="large"
                                options={ENGINES.map(eng => ({
                                    label: (
                                        <div style={{ padding: '4px 0', fontWeight: 500 }}>
                                            {eng.name}
                                        </div>
                                    ),
                                    value: eng.id
                                }))}
                                value={currentEngine.id}
                                onChange={(val) => setSelectedEngineId(val as string)}
                            />
                        </ConfigProvider>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Title level={5}>{t('sections.subject')}</Title>
                        <Text type="secondary" style={{ fontSize: '12px' }}>{currentEngine.name}</Text>
                    </div>
                    <TextArea
                        placeholder={currentEngine.id === 'dalle_3' ? "Describe the image you want..." : t('sections.subjectPlaceholder')}
                        autoSize={{ minRows: 2, maxRows: 4 }}
                        size="large"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{ fontSize: '16px' }}
                    />
                </Card>

                {/* Negative Prompt for Stable Diffusion */}
                {currentEngine.id === 'stable_diffusion' && (
                    <Card bordered={false} style={{ marginBottom: 24 }}>
                        <Title level={5}>Negative Prompt</Title>
                        <TextArea
                            placeholder="Things to avoid (e.g. bad quality, blurry...)"
                            autoSize={{ minRows: 2, maxRows: 3 }}
                            size="large"
                            value={negativePrompt}
                            onChange={(e) => setNegativePrompt(e.target.value)}
                            style={{ fontSize: '16px', color: '#ff7875' }}
                        />
                    </Card>
                )}

                {/* Bottom: Tabs */}
                <Card bordered={false} bodyStyle={{ padding: '0 24px', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }} style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '16px 0', borderBottom: '1px solid #303030', marginBottom: '16px' }}>
                        <Segmented
                            block
                            options={[
                                { label: t('levels.beginner'), value: 1 },
                                { label: t('levels.intermediate'), value: 2 },
                                { label: t('levels.expert'), value: 3 },
                            ]}
                            value={selectedLevel}
                            onChange={(val) => setSelectedLevel(val as number)}
                        />
                    </div>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                        <CategoryTabs />
                    </div>
                </Card>
            </Col>

            {/* Right Column: Preview */}
            <Col xs={24} lg={8} style={{ height: '100%' }}>
                <PromptPreview />
            </Col>
        </Row>
    );
};
