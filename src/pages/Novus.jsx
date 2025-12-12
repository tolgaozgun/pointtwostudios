import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Smile, Sparkles, Calendar, Edit3, Lock, Moon, Smartphone, Tablet } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Novus = () => {
    const { t } = useTranslation();
    const [activeDevice, setActiveDevice] = useState('iphone');

    const iphoneScreenshots = Object.values(import.meta.glob('../assets/screenshots/iphone/*.png', { eager: true, import: 'default' }));
    const ipadScreenshots = Object.values(import.meta.glob('../assets/screenshots/ipad/*.png', { eager: true, import: 'default' }));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="novus-page">
            {/* Hero Section */}
            <section style={{
                padding: '8rem 2rem 4rem',
                textAlign: 'center',
                background: 'radial-gradient(circle at center, rgba(109, 40, 217, 0.15) 0%, transparent 70%)'
            }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        color: 'var(--primary-color)',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        fontWeight: 600
                    }}>
                        {t('novus.hero.badge')}
                    </span>
                    <h1 className="gradient-text" style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem'
                    }}>
                        {t('novus.hero.title')}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                        color: 'var(--text-color)',
                        fontWeight: 300,
                        marginBottom: '1rem'
                    }}>
                        {t('novus.hero.subtitle')}
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
                        {t('novus.hero.description')}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn" style={{ minWidth: '180px' }}>
                            {t('novus.hero.downloadIOS')}
                        </button>
                        <a href="https://play.google.com/store/apps/details?id=com.tolgaozgun.novus" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{
                            minWidth: '180px',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {t('novus.hero.downloadAndroid')}
                        </a>
                        <Link to="/novus/support" className="btn btn-secondary" style={{
                            minWidth: '180px',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary-color)',
                            borderColor: 'var(--primary-color)'
                        }}>
                            {t('novus.hero.support')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section style={{ padding: '4rem 2rem' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 700 }}>{t('novus.features.title')}</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <FeatureCard
                            title={t('novus.features.checkins.title')}
                            description={t('novus.features.checkins.description')}
                            icon={<Smile size={32} color="var(--primary-color)" />}
                        />
                        <FeatureCard
                            title={t('novus.features.content.title')}
                            description={t('novus.features.content.description')}
                            icon={<Sparkles size={32} color="var(--primary-color)" />}
                        />
                        <FeatureCard
                            title={t('novus.features.journal.title')}
                            description={t('novus.features.journal.description')}
                            icon={<Calendar size={32} color="var(--primary-color)" />}
                        />
                        <FeatureCard
                            title={t('novus.features.editor.title')}
                            description={t('novus.features.editor.description')}
                            icon={<Edit3 size={32} color="var(--primary-color)" />}
                        />
                        <FeatureCard
                            title={t('novus.features.privacy.title')}
                            description={t('novus.features.privacy.description')}
                            icon={<Lock size={32} color="var(--primary-color)" />}
                        />
                        <FeatureCard
                            title={t('novus.features.themes.title')}
                            description={t('novus.features.themes.description')}
                            icon={<Moon size={32} color="var(--primary-color)" />}
                        />
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section style={{ padding: '4rem 2rem', background: 'var(--card-bg)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>{t('novus.screenshots.title')}</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>{t('novus.screenshots.subtitle')}</p>

                    {/* Device Selector */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        {['iphone', 'android', 'ipad'].map((device) => (
                            <button
                                key={device}
                                onClick={() => setActiveDevice(device)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: 'var(--radius-full)',
                                    background: activeDevice === device ? 'rgba(124, 58, 237, 0.1)' : 'transparent',
                                    border: `1px solid ${activeDevice === device ? 'var(--primary-color)' : 'var(--card-border)'}`,
                                    color: activeDevice === device ? 'var(--primary-color)' : 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    textTransform: 'capitalize',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: activeDevice === device ? 600 : 400
                                }}
                            >
                                {device === 'ipad' ? <Tablet size={16} /> : <Smartphone size={16} />}
                                {device === 'iphone' ? 'iPhone' : device === 'ipad' ? 'iPad' : 'Android'}
                            </button>
                        ))}
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        overflowX: 'auto',
                        padding: '2rem 1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {activeDevice === 'android' ? (
                            // Android Placeholders
                            [1, 2, 3, 4].map((i) => (
                                <div key={i} style={{
                                    width: '290px',
                                    height: '600px',
                                    background: '#1a1a1a',
                                    borderRadius: '20px',
                                    border: '8px solid #333',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <span style={{ color: '#444' }}>Android Screen {i}</span>
                                </div>
                            ))
                        ) : (
                            // Real Screenshots for iPhone and iPad
                            (activeDevice === 'iphone' ? iphoneScreenshots : ipadScreenshots).map((src, i) => {
                                const isIpad = activeDevice === 'ipad';
                                return (
                                    <div key={i} style={{
                                        width: isIpad ? 'auto' : '280px',
                                        height: isIpad ? '500px' : 'auto',
                                        borderRadius: isIpad ? '20px' : '30px',
                                        overflow: 'hidden',
                                        flexShrink: 0,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                        transition: 'all 0.3s ease',
                                        border: '4px solid #333'
                                    }}>
                                        <img
                                            src={src}
                                            alt={`${activeDevice} screenshot ${i + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </section>

            {/* Technical Details */}
            <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <Link to="/novus/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>{t('common.privacyPolicy')}</Link>
                        <Link to="/novus/support" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>{t('novus.hero.support')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ title, description, icon }) => (
    <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</p>
    </div>
);

export default Novus;
