import { useTranslation } from 'react-i18next';

const NovusSupport = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '6rem 2rem' }}>
            <div style={{ marginBottom: '4rem' }}>
                <Link to="/novus" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    &larr; {t('novus.supportPage.backToNovus')}
                </Link>
                <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>{t('novus.supportPage.title')}</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                    {t('novus.supportPage.subtitle')}
                </p>
            </div>

            <section style={{ marginBottom: '4rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                        <Mail size={32} color="var(--primary-color)" />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t('novus.supportPage.contact.title')}</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{t('novus.supportPage.contact.text')}</p>
                        <a href="mailto:support@pointtwostudios.com" style={{ color: 'var(--primary-color)', fontSize: '1.1rem', textDecoration: 'underline' }}>
                            support@pointtwostudios.com
                        </a>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <HelpCircle size={28} color="var(--text-secondary)" /> {t('novus.supportPage.faq.title')}
                </h2>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('novus.supportPage.faq.q1')}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {t('novus.supportPage.faq.a1')}
                        </p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('novus.supportPage.faq.q2')}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {t('novus.supportPage.faq.a2')}
                        </p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{t('novus.supportPage.faq.q3')}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, }} dangerouslySetInnerHTML={{ __html: t('novus.supportPage.faq.a3') }} />
                    </div>
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Info size={28} color="var(--text-secondary)" /> {t('novus.supportPage.about.title')}
                </h2>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {t('novus.supportPage.about.text')}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default NovusSupport;
