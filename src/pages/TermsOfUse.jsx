import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { useTranslation } from 'react-i18next';

const TermsOfUse = () => {
    const { t } = useTranslation();

    return (
        <LegalLayout title={t('legal.termsOfUse.title')} lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.intro')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.interpretation.title')}</h2>
            <p style={{ marginBottom: '1rem' }}>
                <strong>{t('legal.interpretation')}</strong><br />
                {t('legal.termsOfUse.interpretation.interpretationText')}
            </p>
            <p style={{ marginBottom: '1rem' }}>
                <strong>{t('legal.definitions')}</strong><br />
                {t('legal.termsOfUse.interpretation.definitionsIntro')}
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.termsOfUse.interpretation.application') }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.termsOfUse.interpretation.company') }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.termsOfUse.interpretation.service') }} />
                <li style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: t('legal.termsOfUse.interpretation.you') }} />
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.acknowledgment.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.acknowledgment.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.acknowledgment.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.intellectualProperty.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.intellectualProperty.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.intellectualProperty.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.links.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.links.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.links.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.termination.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.termination.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.termination.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.limitation.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.limitation.text1')}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.limitation.text2')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.asIs.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.asIs.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.governing.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.governing.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.changes.title')}</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('legal.termsOfUse.changes.text1')}
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>{t('legal.termsOfUse.contact.title')}</h2>
            <p>
                {t('legal.termsOfUse.contact.text1')}
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default TermsOfUse;
