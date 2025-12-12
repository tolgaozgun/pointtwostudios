import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { useTranslation } from 'react-i18next';

const Imprint = () => {
    const { t } = useTranslation();
    const currentDate = new Date().toLocaleDateString();

    return (
        <LegalLayout title={t('imprint.title')} lastUpdated={currentDate}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                {t('imprint.informationPursuant')}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
                <strong>POINT TWO STUDIOS LIMITED</strong><br />
                71-75, SHELTON STREET<br />
                LONDON, WC2H 9JQ<br />
                United Kingdom
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                {t('imprint.representedBy')}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
                POINT TWO STUDIOS LIMITED
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                {t('imprint.contact')}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
                Email: contact@pointtwostudios.com
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                {t('imprint.registerEntry')}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
                Please refer to Companies House for registration details.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                {t('imprint.vat')}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
                Not applicable
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                {t('imprint.disclaimer')}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
                {t('imprint.disclaimerText')}
            </p>
        </LegalLayout>
    );
};

export default Imprint;
