import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <header className="flex-center" style={{
                flexDirection: 'column',
                minHeight: '70vh',
                textAlign: 'center',
                gap: '1.5rem',
                padding: '4rem 0'
            }}>
                <h1
                    className="gradient-text"
                    style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        letterSpacing: '-1px'
                    }}
                >
                    <span dangerouslySetInnerHTML={{ __html: t('home.heroTitle').replace('\n', '<br/>') }} />
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    {t('home.heroSubtitle')}
                </p>

                <div style={{ marginTop: '2rem' }}>
                    <a href="mailto:contact@pointtwostudios.com" className="btn">
                        {t('home.getInTouch')}
                    </a>
                </div>
            </header>

            <section id="projects" className="section-padding">
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    fontWeight: '700'
                }}>
                    {t('home.projects')}
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Novus App Card */}
                    <div className="glass-panel project-card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                            borderBottom: '1px solid var(--glass-border)',
                            paddingBottom: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {/* Placeholder Icon/Logo */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    N
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1 }}>Novus</h3>
                            </div>
                            <span style={{
                                background: 'rgba(124, 58, 237, 0.1)',
                                color: 'var(--primary-color)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {t('home.novusCard.type')}
                            </span>
                        </div>

                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            marginBottom: '2rem',
                            flex: 1
                        }}>
                            {t('home.novusCard.description')}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            <Link to="/novus" className="btn" style={{ textDecoration: 'none', flex: 1 }}>
                                {t('common.learnMore')}
                            </Link>
                            <Link to="/novus/privacy-policy" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                                {t('common.privacyPolicy')}
                            </Link>
                        </div>
                    </div>

                    {/* FileHelper App Card */}
                    <div className="glass-panel project-card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                            borderBottom: '1px solid var(--glass-border)',
                            paddingBottom: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {/* Placeholder Icon/Logo */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    F
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1 }}>FileHelper</h3>
                            </div>
                            <span style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: 'var(--accent-color)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {t('home.fileHelperCard.type')}
                            </span>
                        </div>

                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            marginBottom: '2rem',
                            flex: 1
                        }}>
                            {t('home.fileHelperCard.description')}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            <Link to="/filehelper" className="btn" style={{ textDecoration: 'none', flex: 1 }}>
                                {t('common.learnMore')}
                            </Link>
                            <Link to="/filehelper/privacy-policy" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                                {t('common.privacyPolicy')}
                            </Link>
                        </div>
                    </div>

                    {/* MeetTime Card */}
                    <div className="glass-panel project-card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                            borderBottom: '1px solid var(--glass-border)',
                            paddingBottom: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {/* Icon */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    M
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1 }}>MeetTime</h3>
                            </div>
                            <span style={{
                                background: 'rgba(16, 185, 129, 0.1)',
                                color: '#10b981',
                                padding: '0.4rem 0.8rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {t('home.meetTimeCard.type')}
                            </span>
                        </div>

                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            marginBottom: '2rem',
                            flex: 1
                        }}>
                            {t('home.meetTimeCard.description')}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            <button className="btn btn-disabled" style={{ flex: 1, opacity: 0.7, cursor: 'not-allowed' }}>
                                Coming Soon
                            </button>
                        </div>
                    </div>

                    {/* Photo Restoration Card */}
                    <div className="glass-panel project-card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                            borderBottom: '1px solid var(--glass-border)',
                            paddingBottom: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {/* Icon */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    P
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1 }}>Photo Restore</h3>
                            </div>
                            <span style={{
                                background: 'rgba(245, 158, 11, 0.1)',
                                color: '#f59e0b',
                                padding: '0.4rem 0.8rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {t('home.photoRestoreCard.type')}
                            </span>
                        </div>

                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            marginBottom: '2rem',
                            flex: 1
                        }}>
                            {t('home.photoRestoreCard.description')}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            <button className="btn btn-disabled" style={{ flex: 1, opacity: 0.7, cursor: 'not-allowed' }}>
                                Coming Soon
                            </button>
                        </div>
                    </div>

                    {/* Detective Game Card */}
                    <div className="glass-panel project-card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                            borderBottom: '1px solid var(--glass-border)',
                            paddingBottom: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {/* Icon */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    D
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1 }}>Detective</h3>
                            </div>
                            <span style={{
                                background: 'rgba(239, 68, 68, 0.1)',
                                color: '#ef4444',
                                padding: '0.4rem 0.8rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {t('home.detectiveCard.type')}
                            </span>
                        </div>

                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            marginBottom: '2rem',
                            flex: 1
                        }}>
                            {t('home.detectiveCard.description')}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            <button className="btn btn-disabled" style={{ flex: 1, opacity: 0.7, cursor: 'not-allowed' }}>
                                Coming Soon
                            </button>
                        </div>
                    </div>

                    {/* Minecraft Blog Card */}
                    <div className="glass-panel project-card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                            borderBottom: '1px solid var(--glass-border)',
                            paddingBottom: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {/* Icon */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    MC
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: 1 }}>Minecraft Dünyası</h3>
                            </div>
                            <span style={{
                                background: 'rgba(139, 92, 246, 0.1)',
                                color: '#8b5cf6',
                                padding: '0.4rem 0.8rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {t('home.minecraftCard.type')}
                            </span>
                        </div>

                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            marginBottom: '2rem',
                            flex: 1
                        }}>
                            {t('home.minecraftCard.description')}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            <a href="https://minecraftdunyasi.com" target="_blank" rel="noopener noreferrer" className="btn" style={{ textDecoration: 'none', flex: 1 }}>
                                {t('fileHelper.hero.visitWebsite')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ margin: '6rem 0', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('home.getInTouch')}</h2>
                <a href="mailto:contact@pointtwostudios.com" style={{ fontSize: '1.2rem', color: 'var(--accent-color)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    contact@pointtwostudios.com
                </a>
            </section>
        </div>
    );
};

export default Home;
