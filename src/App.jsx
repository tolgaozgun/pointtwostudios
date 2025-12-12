import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import Novus from './pages/Novus';
import NovusSupport from './pages/NovusSupport';
import Imprint from './pages/Imprint';
import CookieConsent from './components/CookieConsent';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="app-container">
        <nav style={{
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 1000,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.9), rgba(10,10,10,0))'
        }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', letterSpacing: '-0.5px' }}>
            Point Two <span style={{ color: 'var(--primary-color)' }}>Studios</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => changeLanguage('en')} style={{ background: 'none', border: 'none', color: i18n.language === 'en' ? 'white' : '#888', cursor: 'pointer' }}>EN</button>
              <button onClick={() => changeLanguage('tr')} style={{ background: 'none', border: 'none', color: i18n.language === 'tr' ? 'white' : '#888', cursor: 'pointer' }}>TR</button>
              <button onClick={() => changeLanguage('de')} style={{ background: 'none', border: 'none', color: i18n.language === 'de' ? 'white' : '#888', cursor: 'pointer' }}>DE</button>
              <button onClick={() => changeLanguage('es')} style={{ background: 'none', border: 'none', color: i18n.language === 'es' ? 'white' : '#888', cursor: 'pointer' }}>ES</button>
            </div>
          </div>
        </nav>
        <div style={{ paddingTop: '100px', minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novus" element={<Novus />} />
            <Route path="/novus/support" element={<NovusSupport />} />
            <Route path="/novus/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </div>
        <footer style={{ textAlign: 'center', padding: '3rem 2rem', color: '#444', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/terms" style={{ color: '#666' }}>{t('common.terms')}</Link>
            <Link to="/privacy" style={{ color: '#666' }}>{t('common.privacy')}</Link>
            <Link to="/cookies" style={{ color: '#666' }}>{t('common.cookies')}</Link>
            <Link to="/disclaimer" style={{ color: '#666' }}>{t('common.disclaimer')}</Link>
            <Link to="/imprint" style={{ color: '#666' }}>{t('common.imprint')}</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} {t('common.pointTwoStudios')}. {t('common.allRightsReserved')}</p>
        </footer>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
