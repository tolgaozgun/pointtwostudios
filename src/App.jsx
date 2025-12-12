import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import Novus from './pages/Novus';
import NovusSupport from './pages/NovusSupport';
import FileHelper from './pages/FileHelper';
import PhotoRestore from './pages/PhotoRestore';
import DetectiveGame from './pages/DetectiveGame';
import MeetTime from './pages/MeetTime';
import MinecraftWorld from './pages/MinecraftWorld';
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
              <Route path="/filehelper/terms-of-use" element={<TermsOfUse appName="FileHelper" domainName="filehelper.app" />} />
              <Route path="/filehelper/cookie-policy" element={<CookiePolicy appName="FileHelper" domainName="filehelper.app" />} />
              <Route path="/filehelper/disclaimer" element={<Disclaimer appName="FileHelper" domainName="filehelper.app" />} />

              {/* Photo Restoration App */}
              <Route path="/photo-restore" element={<PhotoRestore />} />
              <Route path="/photo-restore/privacy-policy" element={<PrivacyPolicy appName="Photo Restoration" domainName="pointtwostudios.com" />} />
              <Route path="/photo-restore/terms-of-use" element={<TermsOfUse appName="Photo Restoration" domainName="pointtwostudios.com" />} />
              <Route path="/photo-restore/cookie-policy" element={<CookiePolicy appName="Photo Restoration" domainName="pointtwostudios.com" />} />
              <Route path="/photo-restore/disclaimer" element={<Disclaimer appName="Photo Restoration" domainName="pointtwostudios.com" />} />

              {/* Detective Game */}
              <Route path="/detective" element={<DetectiveGame />} />
              <Route path="/detective/privacy-policy" element={<PrivacyPolicy appName="Detective Game" domainName="pointtwostudios.com" />} />
              <Route path="/detective/terms-of-use" element={<TermsOfUse appName="Detective Game" domainName="pointtwostudios.com" />} />
              <Route path="/detective/cookie-policy" element={<CookiePolicy appName="Detective Game" domainName="pointtwostudios.com" />} />
              <Route path="/detective/disclaimer" element={<Disclaimer appName="Detective Game" domainName="pointtwostudios.com" />} />

              {/* MeetTime */}
              <Route path="/meettime" element={<MeetTime />} />
              <Route path="/meettime/privacy-policy" element={<PrivacyPolicy appName="MeetTime" domainName="meettime.app" />} />
              <Route path="/meettime/terms-of-use" element={<TermsOfUse appName="MeetTime" domainName="meettime.app" />} />
              <Route path="/meettime/cookie-policy" element={<CookiePolicy appName="MeetTime" domainName="meettime.app" />} />
              <Route path="/meettime/disclaimer" element={<Disclaimer appName="MeetTime" domainName="meettime.app" />} />

              {/* Minecraft World */}
              <Route path="/minecraft" element={<MinecraftWorld />} />
              <Route path="/minecraft/privacy-policy" element={<PrivacyPolicy appName="Minecraft Dünyası" domainName="minecraftdunyasi.com" />} />
              <Route path="/minecraft/terms-of-use" element={<TermsOfUse appName="Minecraft Dünyası" domainName="minecraftdunyasi.com" />} />
              <Route path="/minecraft/cookie-policy" element={<CookiePolicy appName="Minecraft Dünyası" domainName="minecraftdunyasi.com" />} />
              <Route path="/minecraft/disclaimer" element={<Disclaimer appName="Minecraft Dünyası" domainName="minecraftdunyasi.com" />} />

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
