import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer style={{
            backgroundColor: 'var(--footer-bg)',
            borderTop: '1px solid var(--footer-border)',
            padding: '4rem 0 2rem',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <Link to="/terms" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('common.terms')}</Link>
                        <Link to="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('common.privacy')}</Link>
                        <Link to="/cookies" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('common.cookies')}</Link>
                        <Link to="/disclaimer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('common.disclaimer')}</Link>
                        <Link to="/imprint" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('common.imprint')}</Link>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            &copy; {year} {t('common.pointTwoStudios')}. {t('common.allRightsReserved')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
