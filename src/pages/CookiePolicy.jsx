import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { useTranslation } from 'react-i18next';

const CookiePolicy = () => {
    const { t } = useTranslation();

    return (
        <LegalLayout title={t('legal.cookiePolicy.title')} lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.cookiePolicy.intro')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.interpretation')}</h2>
            <p style={{ marginBottom: '1rem' }}>
                <strong>{t('legal.termsOfUse.interpretation.definitionsIntro')}</strong><br />
                {t('legal.termsOfUse.interpretation.interpretationText')}
            </p>
            <p style={{ marginBottom: '1rem' }}>
                <strong>{t('legal.definitions')}</strong><br />
                {t('legal.cookiePolicy.interpretation.definitionsIntro')}
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.privacyPolicy.interpretation.company') }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.cookiePolicy.interpretation.cookies') }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.cookiePolicy.interpretation.website') }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.privacyPolicy.interpretation.you') }} />
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.cookiePolicy.useOfCookies.title')}</h2>
            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#e5e7eb', fontSize: '1.1rem' }}>{t('legal.cookiePolicy.useOfCookies.typeTitle')}</h3>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.cookiePolicy.useOfCookies.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.cookiePolicy.useOfCookies.text2')}
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '1.5rem' }}>
                    <strong>{t('legal.cookiePolicy.useOfCookies.necessary.title')}</strong><br />
                    {t('legal.cookiePolicy.useOfCookies.necessary.type')}<br />
                    {t('legal.cookiePolicy.useOfCookies.necessary.administered')}<br />
                    {t('legal.cookiePolicy.useOfCookies.necessary.purpose')}
                </li>
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
