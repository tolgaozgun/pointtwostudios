import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { useTranslation } from 'react-i18next';

const TermsOfUse = ({ appName = "Point Two Studios", domainName = "pointtwostudios.com" }) => {
    const { t } = useTranslation();

    return (
        <LegalLayout title={t('legal.termsOfUse.title')} lastUpdated="November 25, 2025">
            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.agreement.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.agreement.text', { appName })}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.interpretation')}</h2>
            <p style={{ marginBottom: '1rem' }}>
                {t('legal.termsOfUse.interpretation.definitionsIntro')}
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.termsOfUse.interpretation.company', { appName, domainName }) }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.termsOfUse.interpretation.service', { appName, domainName }) }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.termsOfUse.interpretation.you', { appName, domainName }) }} />
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.acknowledgment.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.acknowledgment.text1', { appName })}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.acknowledgment.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.links.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.links.text', { appName })}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.termination.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.termination.text', { appName })}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.law.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.law.text')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.limitation.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.limitation.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.limitation.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.asIs.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.asIs.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.governing.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.governing.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('legal.termsOfUse.changes.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.changes.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.contact.title')}</h2>
            <p>
                {t('legal.termsOfUse.contact.text1')}
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout >
    );
};

export default TermsOfUse;
