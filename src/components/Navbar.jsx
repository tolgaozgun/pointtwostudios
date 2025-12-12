import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            padding: '1rem 2rem',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: scrolled ? 'var(--nav-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        }}>
            <div className="container flex-between">
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.5px' }}>
                    <span style={{ color: 'var(--text-color)' }}>Point Two</span>
                    <span style={{ color: 'var(--primary-color)', marginLeft: '6px' }}>Studios</span>
                </Link>

                <div className="flex-center" style={{ gap: '1rem' }}>
                    <LanguageSelector />

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--card-border)',
                            color: 'var(--text-color)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            transition: 'all 0.2s ease',
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
