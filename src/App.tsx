import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { PromptProvider } from './context/PromptContext';
import { MainLayout } from './components/Layout/MainLayout';
import { BuilderPage } from './pages/BuilderPage';
import { LandingPage } from './pages/LandingPage';

import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#eb2f96',
            borderRadius: 8,
            colorBgContainer: '#1f1f1f',
            colorBgLayout: '#141414',
          },
        }}
      >
        <PromptProvider>
          <Router>
            <MainLayout>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/builder" element={<BuilderPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </MainLayout>
          </Router>
        </PromptProvider>
      </ConfigProvider>
    </HelmetProvider>
  );
};

export default App;
