import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
    titleKey?: string;
    descriptionKey?: string;
    path?: string;
    schemaType?: 'WebPage' | 'SoftwareApplication' | 'FAQPage';
    jsonLd?: Record<string, unknown>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
    titleKey = 'app.title',
    descriptionKey = 'landing.heroSubtitle',
    path = '',
    jsonLd
}) => {
    const { t, i18n } = useTranslation();
    const siteUrl = 'https://promptbuilder.example.com'; // Replace with actual URL in prod
    const fullUrl = `${siteUrl}${path}`;
    const title = t(titleKey);
    const description = t(descriptionKey);

    return (
        <Helmet>
            <html lang={i18n.language} />
            <title>{title} | Midjourney Prompt Builder</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta name="twitter:card" content="summary_large_image" />

            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};
