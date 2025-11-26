import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Smile, Sparkles, Calendar, Edit3, Lock, Moon, Smartphone, Tablet } from 'lucide-react';

const Novus = () => {
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
                background: 'radial-gradient(circle at center, rgba(109, 40, 217, 0.15) 0%, rgba(10, 10, 10, 0) 70%)'
            }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '999px',
                        background: 'rgba(109, 40, 217, 0.1)',
                        border: '1px solid rgba(109, 40, 217, 0.2)',
                        color: '#d8b4fe',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        fontWeight: 500
                    }}>
                        Version 2.0 Now Available
                    </span>
                    <h1 className="gradient-text" style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem'
                    }}>
                        Novus
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                        color: '#e0e0e0',
                        fontWeight: 300,
                        marginBottom: '1rem'
                    }}>
                        Your Daily Mental Wellness Companion
                    </p>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#888',
                        lineHeight: 1.6,
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        A personalized mental wellness companion that combines daily emotional check-ins with curated motivational content.
                        100% offline and private.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn" style={{ minWidth: '180px' }}>
                            Download on iOS
                        </button>
                        <button className="btn" style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.1)',
                            minWidth: '180px'
                        }}>
                            Get on Android
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section style={{ padding: '4rem 2rem' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Features</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <FeatureCard
                            title="Mindful Check-ins"
                            description="Start your day by reflecting on how you feel. A structured flow to assess mood and needs."
                            icon={<Smile size={32} color="#d8b4fe" />}
                        />
                        <FeatureCard
                            title="Personalized Content"
                            description="Receive quotes tailored to your current emotional state and needs."
                            icon={<Sparkles size={32} color="#d8b4fe" />}
                        />
                        <FeatureCard
                            title="Journal History"
                            description="Track your mood over time with a private journal. View past entries and trends."
                            icon={<Calendar size={32} color="#d8b4fe" />}
                        />
                        <FeatureCard
                            title="Quote Editor"
                            description="Customize and share quotes with beautiful backgrounds and typography."
                            icon={<Edit3 size={32} color="#d8b4fe" />}
                        />
                        <FeatureCard
                            title="Privacy First"
                            description="100% offline, local storage. No data collection, ever."
                            icon={<Lock size={32} color="#d8b4fe" />}
                        />
                        <FeatureCard
                            title="Visual Themes"
                            description="Beautiful themes including Midnight, Sunrise, and Forest to match your vibe."
                            icon={<Moon size={32} color="#d8b4fe" />}
                        />
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section style={{ padding: '4rem 2rem', background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Experience Novus</h2>
                    <p style={{ textAlign: 'center', color: '#888', marginBottom: '3rem' }}>Designed for focus and clarity.</p>

                    {/* Device Selector */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        {['iphone', 'android', 'ipad'].map((device) => (
                            <button
                                key={device}
                                onClick={() => setActiveDevice(device)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '999px',
                                    background: activeDevice === device ? 'rgba(109, 40, 217, 0.2)' : 'transparent',
                                    border: `1px solid ${activeDevice === device ? 'rgba(109, 40, 217, 0.5)' : 'rgba(255,255,255,0.1)'}`,
                                    color: activeDevice === device ? '#d8b4fe' : '#888',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    textTransform: 'capitalize',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
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
                        padding: '2rem 0',
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
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
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
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
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
                    <p style={{ color: '#666', marginBottom: '1rem' }}>Built with React Native & Expo</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <Link to="/novus/privacy-policy" style={{ color: '#888', textDecoration: 'underline' }}>Privacy Policy</Link>
                        <Link to="/novus/support" style={{ color: '#888', textDecoration: 'underline' }}>Support</Link>
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
        <p style={{ color: '#aaa', lineHeight: 1.6 }}>{description}</p>
    </div>
);

export default Novus;
