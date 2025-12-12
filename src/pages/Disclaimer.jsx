import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { useTranslation } from 'react-i18next';

const Disclaimer = ({ appName = "Point Two Studios", domainName = "pointtwostudios.com" }) => {
    const { t } = useTranslation();

    return (
        <LegalLayout title={t('legal.disclaimer.title')} lastUpdated="November 25, 2025">
            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.interpretation')}</h2>
            <p style={{ marginBottom: '1rem' }}>
                {t('legal.disclaimer.interpretation.definitionsIntro')}
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.disclaimer.interpretation.company', { appName, domainName }) }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.disclaimer.interpretation.service', { appName, domainName }) }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.disclaimer.interpretation.you', { appName, domainName }) }} />
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.disclaimer.general.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.general.text', { appName })}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.general.text2', { appName })}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.disclaimer.errors.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.errors.text', { appName })}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.disclaimer.fairUse.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.disclaimer.fairUse.text', { appName })}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.disclaimer.contact.title')}</h2>
            <p>
                {t('legal.disclaimer.contact.text')}
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--primary-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default Disclaimer;
