import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = ({ appName = "Point Two Studios", domainName = "pointtwostudios.com" }) => {
    const { t } = useTranslation();

    return (
        <LegalLayout title={t('legal.privacyPolicy.title', { appName })} lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.privacyPolicy.intro', { appName, domainName })}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.interpretation')}</h2>
            <p style={{ marginBottom: '1rem' }}>
                {t('legal.termsOfUse.interpretation.definitionsIntro')}
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.privacyPolicy.interpretation.company', { appName, domainName }) }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.privacyPolicy.interpretation.service', { appName, domainName }) }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.privacyPolicy.interpretation.you', { appName, domainName }) }} />
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.privacyPolicy.collecting.title')}</h2>
            <p style={{ marginBottom: '1rem' }}>
                <strong>{t('legal.privacyPolicy.collecting.typesTitle')}</strong>
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.privacyPolicy.collecting.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.privacyPolicy.gdpr.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.privacyPolicy.gdpr.intro')}
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>{t('legal.privacyPolicy.gdpr.access')}</li>
                <li style={{ marginBottom: '0.5rem' }}>{t('legal.privacyPolicy.gdpr.rectification')}</li>
                <li style={{ marginBottom: '0.5rem' }}>{t('legal.privacyPolicy.gdpr.erasure')}</li>
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.privacyPolicy.cookies.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.privacyPolicy.cookies.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.privacyPolicy.cookies.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.privacyPolicy.children.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.privacyPolicy.children.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.privacyPolicy.changes.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.privacyPolicy.changes.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.privacyPolicy.contact.title')}</h2>
            <p>
                {t('legal.privacyPolicy.contact.text1')}
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--primary-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default PrivacyPolicy;
