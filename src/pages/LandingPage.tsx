import React from 'react';
import { Typography, Row, Col } from 'antd';
import { BulbOutlined, ExperimentOutlined, ThunderboltFilled, BgColorsOutlined, SettingOutlined, MessageOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LandingPage.css';
import { usePromptBuilder } from '../context/PromptContext';

const { Title, Paragraph } = Typography;

import { SEOHead } from '../components/SEO/SEOHead';

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { setSelectedEngineId } = usePromptBuilder();

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": t('landing.faq.q1'),
                "acceptedAnswer": { "@type": "Answer", "text": t('landing.faq.a1') }
            },
            {
                "@type": "Question",
                "name": t('landing.faq.q2'),
                "acceptedAnswer": { "@type": "Answer", "text": t('landing.faq.a2') }
            }
        ]
    };

    return (
        <div className="landing-page">
            <SEOHead
                titleKey="landing.heroTitle"
                descriptionKey="landing.heroSubtitle"
                path="/"
                jsonLd={faqSchema}
            />

            {/* Hero Section */}
            {/* Same Hero content as before... */}
            <header className="landing-hero">
                <div className="floating-element">
                    <ThunderboltFilled style={{ fontSize: '64px', color: '#eb2f96', marginBottom: '20px' }} />
                </div>
                <h1 className="landing-title">{t('landing.heroTitle')}</h1>
                <Paragraph className="landing-subtitle">
                    {t('landing.heroSubtitle')}
                </Paragraph>

                <div style={{ marginTop: '40px' }}>
                    <Title level={4} style={{ color: '#fff', marginBottom: '24px' }}>Select your Generative AI Engine</Title>
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={8} md={6}>
                            <div
                                className="engine-card"
                                onClick={() => {
                                    setSelectedEngineId('midjourney');
                                    navigate('/builder');
                                }}
                            >
                                <BgColorsOutlined style={{ fontSize: '32px', color: '#eb2f96', marginBottom: '16px' }} />
                                <Title level={5} style={{ color: '#fff', margin: 0 }}>Midjourney v6</Title>
                                <Paragraph type="secondary" style={{ fontSize: '12px', margin: 0 }}>Artistic & Photorealistic</Paragraph>
                            </div>
                        </Col>
                        <Col xs={24} sm={8} md={6}>
                            <div
                                className="engine-card"
                                onClick={() => {
                                    setSelectedEngineId('stable_diffusion');
                                    navigate('/builder');
                                }}
                            >
                                <SettingOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '16px' }} />
                                <Title level={5} style={{ color: '#fff', margin: 0 }}>Stable Diffusion</Title>
                                <Paragraph type="secondary" style={{ fontSize: '12px', margin: 0 }}>Technical & Controlled</Paragraph>
                            </div>
                        </Col>
                        <Col xs={24} sm={8} md={6}>
                            <div
                                className="engine-card"
                                onClick={() => {
                                    setSelectedEngineId('dalle_3');
                                    navigate('/builder');
                                }}
                            >
                                <MessageOutlined style={{ fontSize: '32px', color: '#52c41a', marginBottom: '16px' }} />
                                <Title level={5} style={{ color: '#fff', margin: 0 }}>DALL-E 3</Title>
                                <Paragraph type="secondary" style={{ fontSize: '12px', margin: 0 }}>Natural Language</Paragraph>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>

            {/* Features Section */}
            <section className="landing-section">
                <Row gutter={[32, 32]}>
                    <Col xs={24} md={8}>
                        <div className="feature-card">
                            <BulbOutlined className="feature-icon" />
                            <Title level={3} style={{ color: '#fff' }}>{t('landing.features.visualTitle')}</Title>
                            <Paragraph type="secondary">
                                {t('landing.features.visualDesc')}
                            </Paragraph>
                        </div>
                    </Col>
                    <Col xs={24} md={8}>
                        <div className="feature-card">
                            <ExperimentOutlined className="feature-icon" />
                            <Title level={3} style={{ color: '#fff' }}>{t('landing.features.techTitle')}</Title>
                            <Paragraph type="secondary">
                                {t('landing.features.techDesc')}
                            </Paragraph>
                        </div>
                    </Col>
                    <Col xs={24} md={8}>
                        <div className="feature-card">
                            <ThunderboltFilled className="feature-icon" />
                            <Title level={3} style={{ color: '#fff' }}>{t('landing.features.optimizeTitle')}</Title>
                            <Paragraph type="secondary">
                                {t('landing.features.optimizeDesc')}
                            </Paragraph>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* SEO / GEO Content Section */}
            <section className="landing-section seo-text">
                <article>
                    <Title level={2}>{t('landing.seo.title')}</Title>
                    <Paragraph>{t('landing.seo.p1')}</Paragraph>

                    <Title level={2}>{t('landing.seo.subtitle1')}</Title>
                    <Paragraph>{t('landing.seo.p2')}</Paragraph>

                    <Title level={2}>{t('landing.seo.subtitle2')}</Title>
                    <Paragraph>{t('landing.seo.p3')}</Paragraph>
                </article>
            </section>

            {/* FAQ Section */}
            <section className="landing-section" style={{ background: '#141414', borderRadius: '12px', marginTop: '40px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</Title>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Title level={4}>{t('landing.faq.q1')}</Title>
                    <Paragraph type="secondary" style={{ marginBottom: '24px' }}>{t('landing.faq.a1')}</Paragraph>

                    <Title level={4}>{t('landing.faq.q2')}</Title>
                    <Paragraph type="secondary" style={{ marginBottom: '24px' }}>{t('landing.faq.a2')}</Paragraph>

                    <Title level={4}>{t('landing.faq.q3')}</Title>
                    <Paragraph type="secondary" style={{ marginBottom: '24px' }}>{t('landing.faq.a3')}</Paragraph>
                </div>
            </section>
        </div>
    );
};
