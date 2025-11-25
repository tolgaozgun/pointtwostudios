import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setIsVisible(true);
        } else if (consent === 'granted') {
            updateConsent('granted');
        }
    }, []);

    const updateConsent = (status) => {
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'ad_storage': status,
                'ad_user_data': status,
                'ad_personalization': status,
                'analytics_storage': status
            });
        }
        localStorage.setItem('cookie_consent', status);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            maxWidth: '500px',
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '12px',
            padding: '1.5rem',
            zIndex: 2000,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>We value your privacy</h3>
                <p style={{ fontSize: '0.9rem', color: '#aaa', lineHeight: 1.5 }}>
                    We use cookies to enhance your browsing experience and analyze our traffic.
                    By clicking "Accept All", you consent to our use of cookies.
                    <a href="/novus/privacy-policy" style={{ color: 'var(--primary-color)', marginLeft: '0.5rem', textDecoration: 'underline' }}>Read Policy</a>
                </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                    onClick={() => updateConsent('denied')}
                    style={{
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        border: '1px solid #333',
                        background: 'transparent',
                        color: '#ccc',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.borderColor = '#666'}
                    onMouseOut={(e) => e.target.style.borderColor = '#333'}
                >
                    Reject All
                </button>
                <button
                    onClick={() => updateConsent('granted')}
                    className="btn"
                    style={{
                        padding: '0.6rem 1.2rem',
                        fontSize: '0.9rem',
                        boxShadow: 'none'
                    }}
                >
                    Accept All
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
