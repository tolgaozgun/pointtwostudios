import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, HelpCircle, Info } from 'lucide-react';

const NovusSupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '6rem 2rem' }}>
            <div style={{ marginBottom: '4rem' }}>
                <Link to="/novus" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    &larr; Back to Novus
                </Link>
                <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Novus Support</h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
                    Need help with Novus? You can contact our team anytime.
                </p>
            </div>

            <section style={{ marginBottom: '4rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ background: 'rgba(109, 40, 217, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                        <Mail size={32} color="#d8b4fe" />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact Support</h2>
                        <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>For any inquiries, bugs, or feedback:</p>
                        <a href="mailto:support@pointtwostudios.com" style={{ color: '#d8b4fe', fontSize: '1.1rem', textDecoration: 'underline' }}>
                            support@pointtwostudios.com
                        </a>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <HelpCircle size={28} color="#888" /> Frequently Asked Questions
                </h2>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>1. How do I use the Daily Quote feature?</h3>
                        <p style={{ color: '#aaa', lineHeight: 1.6 }}>
                            Simply open the app and tap on the "Daily Check-in" card on the home screen. Select your current mood and what you need (e.g., Motivation, Peace), and Novus will generate a personalized quote just for you.
                        </p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>2. How do I save a favorite?</h3>
                        <p style={{ color: '#aaa', lineHeight: 1.6 }}>
                            When viewing any quote, tap the "Heart" icon to save it to your Favorites. You can access all your saved quotes from the "Favorites" tab in the bottom navigation bar.
                        </p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>3. How do I report a bug or send feedback?</h3>
                        <p style={{ color: '#aaa', lineHeight: 1.6 }}>
                            We value your feedback! Please email us directly at <a href="mailto:support@pointtwostudios.com" style={{ color: '#d8b4fe' }}>support@pointtwostudios.com</a> with a description of the issue or your suggestion.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Info size={28} color="#888" /> About Novus
                </h2>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <p style={{ color: '#aaa', lineHeight: 1.6 }}>
                        Novus is a personalized mental wellness companion designed to help you track your mood and find daily inspiration.
                        Built with a privacy-first approach, all your data stays securely on your device.
                        Whether you need motivation, peace, or just a moment of reflection, Novus is here to support your journey.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default NovusSupport;
