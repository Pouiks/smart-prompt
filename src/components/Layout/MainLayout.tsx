import React, { type ReactNode } from 'react';
import { Layout, Typography, Button, Space } from 'antd';
import { FireFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#1f1f1f',
                padding: '0 24px',
                height: '64px',
                borderBottom: '1px solid #303030'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <FireFilled style={{ color: '#eb2f96', fontSize: '24px', marginRight: '12px' }} />
                    <Title level={4} style={{ color: 'white', margin: 0 }}>{t('app.title')}</Title>
                </Link>

                <Space>
                    <Button
                        type={i18n.language === 'fr' ? 'primary' : 'default'}
                        size="small"
                        onClick={() => changeLanguage('fr')}
                    >
                        🇫🇷 FR
                    </Button>
                    <Button
                        type={i18n.language === 'en' ? 'primary' : 'default'}
                        size="small"
                        onClick={() => changeLanguage('en')}
                    >
                        🇬🇧 EN
                    </Button>
                </Space>
            </Header>
            <Content style={{ padding: '24px', maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
                {children}
            </Content>
        </Layout>
    );
};
