import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { useTranslation } from 'react-i18next';

const Disclaimer = () => {
    const { t } = useTranslation();

    return (
        <LegalLayout title={t('legal.disclaimer.title')} lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.intro1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.intro2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.disclaimer.general.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.general.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.general.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.disclaimer.externalLinks.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.externalLinks.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.externalLinks.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.disclaimer.errors.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.errors.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.errors.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.disclaimer.fairUse.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.fairUse.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.fairUse.text2')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.fairUse.text3')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.disclaimer.views.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.views.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.views.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.disclaimer.noResponsibility.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.noResponsibility.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.noResponsibility.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.disclaimer.useRisk.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.useRisk.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.useRisk.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.disclaimer.contact.title')}</h2>
            <p>
                {t('legal.disclaimer.contact.text1')}
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default Disclaimer;
