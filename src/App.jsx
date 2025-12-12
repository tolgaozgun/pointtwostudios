import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import Novus from './pages/Novus';
import NovusSupport from './pages/NovusSupport';
import FileHelper from './pages/FileHelper';
import Imprint from './pages/Imprint';
import CookieConsent from './components/CookieConsent';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ paddingTop: '80px', flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/novus" element={<Novus />} />
              <Route path="/novus/support" element={<NovusSupport />} />
              <Route path="/novus/privacy-policy" element={<PrivacyPolicy appName="Novus" domainName="pointtwostudios.com/novus" />} />

              <Route path="/filehelper" element={<FileHelper />} />
              <Route path="/filehelper/privacy-policy" element={<PrivacyPolicy appName="FileHelper" domainName="filehelper.app" />} />
              <Route path="/filehelper/terms" element={<TermsOfUse appName="FileHelper" domainName="filehelper.app" />} />
              <Route path="/filehelper/cookies" element={<CookiePolicy appName="FileHelper" domainName="filehelper.app" />} />
              <Route path="/filehelper/disclaimer" element={<Disclaimer appName="FileHelper" domainName="filehelper.app" />} />

              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfUse />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/imprint" element={<Imprint />} />
            </Routes>
          </div>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
