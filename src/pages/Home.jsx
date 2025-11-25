const Home = () => {
    return (
        <div className="container">
            <header style={{ textAlign: 'center', padding: '6rem 0 4rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 700 }}>
                    Crafting Digital<br />Experiences
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#888', maxWidth: '600px', margin: '0 auto', fontWeight: 300 }}>
                    Point Two Studios is the personal creative playground of Tolga Ozgun.
                    Focusing on minimalist, functional, and beautiful software.
                </p>
            </header>

            <section style={{ margin: '4rem 0' }}>
                <h2 style={{ marginBottom: '2rem', fontSize: '2rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem' }}>Projects</h2>
                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>

                    {/* Novus App Card */}
                    <div className="glass-panel" style={{ transition: 'transform 0.3s ease' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Novus</h3>
                            <span style={{
                                fontSize: '0.75rem',
                                background: 'rgba(109, 40, 217, 0.2)',
                                color: '#d8b4fe',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '999px',
                                border: '1px solid rgba(109, 40, 217, 0.3)'
                            }}>Mobile App</span>
                        </div>
                        <p style={{ marginBottom: '1.5rem', color: '#ccc', lineHeight: 1.6 }}>
                            "Motivational Quotes - Novus" is designed to bring daily inspiration with a clean, distraction-free interface.
                            Features a curated collection of quotes to boost your productivity and mindfulness.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn" style={{ opacity: 0.7, cursor: 'not-allowed' }} title="Coming Soon">App Store</button>
                            <a href="/privacy-policy" style={{ display: 'flex', alignItems: 'center', color: '#888', fontSize: '0.9rem' }}>Privacy Policy &rarr;</a>
                        </div>
                    </div>

                </div>
            </section>

            <section style={{ margin: '6rem 0', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Get in Touch</h2>
                <a href="mailto:contact@pointtwostudios.com" style={{ fontSize: '1.2rem', color: 'var(--accent-color)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    contact@pointtwostudios.com
                </a>
            </section>
        </div>
    );
};

export default Home;
