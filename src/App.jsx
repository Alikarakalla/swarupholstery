import { AnimatePresence } from 'motion/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/animate-ui/PageTransition';
import Contact from './pages/Contact';
import Fabrics from './pages/Fabrics';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';

function App() {
  const location = useLocation();

  return (
    <div className="appShell">
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route path="/about" element={<Navigate replace to="/" />} />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/gallery"
              element={
                <PageTransition>
                  <Gallery />
                </PageTransition>
              }
            />
            <Route
              path="/fabrics"
              element={
                <PageTransition>
                  <Fabrics />
                </PageTransition>
              }
            />
            <Route path="/quote" element={<Navigate replace to="/contact" />} />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
