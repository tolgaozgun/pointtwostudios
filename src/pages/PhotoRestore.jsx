import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PhotoRestore = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="photo-restore-page">
            {/* Hero Section */}
            <section style={{
                padding: '8rem 2rem 4rem',
                textAlign: 'center',
                background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, transparent 70%)'
            }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        color: '#f59e0b',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        fontWeight: 600
                    }}>
                        {t('photoRestore.hero.badge')}
                    </span>
                    <h1 className="gradient-text" style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        backgroundImage: 'linear-gradient(135deg, var(--text-color) 0%, #f59e0b 100%)'
                    }}>
                        {t('photoRestore.hero.title')}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                        color: 'var(--text-color)',
                        fontWeight: 300,
                        marginBottom: '1rem'
                    }}>
                        {t('photoRestore.hero.subtitle')}
                    </p>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        {t('photoRestore.hero.description')}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-disabled" style={{
                            minWidth: '200px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0.7,
                            cursor: 'not-allowed'
                        }}>
                            {t('common.comingSoon')}
                        </button>
                        <Link to="/photo-restore/privacy-policy" className="btn btn-secondary" style={{
                            minWidth: '180px',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {t('common.privacyPolicy')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PhotoRestore;
