import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  useEffect(() => {
    const scrollButton = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#eafaf1' }}>  {/* mint cream */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Landing />
                <Projects />
                <Tools />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <button
          id="scrollTopBtn"
          onClick={scrollToTop}
          className="btn btn-primary rounded-circle"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            display: 'none',
            zIndex: 999,
          }}
        >
          ↑
        </button>
      </div>
    </Router>
  );
}

export default App;