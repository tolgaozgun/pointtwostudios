import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import Novus from './pages/Novus';
import NovusSupport from './pages/NovusSupport';
import CookieConsent from './components/CookieConsent';

function App() {
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
          <div>
            <Link to="/novus/privacy-policy" style={{ fontSize: '0.9rem', color: '#aaa', marginLeft: '1rem' }}>Privacy</Link>
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
          </Routes>
        </div>
        <footer style={{ textAlign: 'center', padding: '3rem 2rem', color: '#444', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/terms" style={{ color: '#666' }}>Terms of Use</Link>
            <Link to="/privacy" style={{ color: '#666' }}>Privacy Policy</Link>
            <Link to="/cookies" style={{ color: '#666' }}>Cookie Policy</Link>
            <Link to="/disclaimer" style={{ color: '#666' }}>Disclaimer</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Point Two Studios. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Designed & Built by Tolga Ozgun</p>
        </footer>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
