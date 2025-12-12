import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { useTranslation } from 'react-i18next';

const CookiePolicy = ({ appName = "Point Two Studios", domainName = "pointtwostudios.com" }) => {
    const { t } = useTranslation();

    return (
        <LegalLayout title={t('legal.cookiePolicy.title')} lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.cookiePolicy.intro', { appName, domainName })}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.interpretation')}</h2>
            <p style={{ marginBottom: '1rem' }}>
                {t('legal.cookiePolicy.interpretation.definitionsIntro')}
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '1.5rem' }}>
                    <strong>{t('legal.cookiePolicy.useOfCookies.functionality.title')}</strong><br />
                    {t('legal.cookiePolicy.useOfCookies.functionality.type')}<br />
                    {t('legal.cookiePolicy.useOfCookies.functionality.administered')}<br />
                    {t('legal.cookiePolicy.useOfCookies.functionality.purpose')}
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                    <strong>{t('legal.cookiePolicy.useOfCookies.tracking.title')}</strong><br />
                    {t('legal.cookiePolicy.useOfCookies.tracking.type')}<br />
                    {t('legal.cookiePolicy.useOfCookies.tracking.administered')}<br />
                    {t('legal.cookiePolicy.useOfCookies.tracking.purpose')}
                </li>
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.cookiePolicy.choices.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.cookiePolicy.choices.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.cookiePolicy.choices.text2')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.cookiePolicy.choices.text3')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.cookiePolicy.contact.title')}</h2>
            <p>
                {t('legal.cookiePolicy.contact.text1')}
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default CookiePolicy;
