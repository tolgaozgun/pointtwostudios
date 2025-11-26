import React, { useEffect } from 'react';

const LegalLayout = ({ title, lastUpdated, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '0.5rem', fontSize: '2.5rem' }}>{title}</h1>
                {lastUpdated && (
                    <p style={{ marginBottom: '2rem', color: '#888', fontSize: '0.9rem' }}>
                        Last updated: {lastUpdated}
                    </p>
                )}
                <div style={{ color: '#d1d5db' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
