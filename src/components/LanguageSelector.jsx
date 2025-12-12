import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from './ThemeContext';

const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { theme } = useTheme();

    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="language-selector" ref={dropdownRef} style={{ position: 'relative', zIndex: 50 }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--card-bg)', // Use variable
                    border: '1px solid var(--card-border)', // Use variable
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-md)', // Use variable
                    color: 'var(--text-color)', // Use variable
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    boxShadow: isOpen ? '0 0 0 2px var(--primary-color)' : 'none'
                }}
            >
                <span>{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>▼</span>
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 0.5rem)',
                    right: 0,
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.5rem',
                    minWidth: '150px',
                    boxShadow: 'var(--glass-shadow)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    animation: 'fadeIn 0.2s ease'
                }}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.6rem 0.8rem',
                                background: i18n.language === lang.code ? 'var(--bg-color)' : 'transparent',
                                border: 'none',
                                borderRadius: 'var(--radius-md)',
                                color: i18n.language === lang.code ? 'var(--primary-color)' : 'var(--text-color)',
                                cursor: 'pointer',
                                textAlign: 'left',
                                fontSize: '0.9rem',
                                transition: 'background 0.2s',
                                fontWeight: i18n.language === lang.code ? '600' : '400'
                            }}
                            onMouseEnter={(e) => {
                                if (i18n.language !== lang.code) e.currentTarget.style.background = 'var(--bg-color)';
                            }}
                            onMouseLeave={(e) => {
                                if (i18n.language !== lang.code) e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default LanguageSelector;
