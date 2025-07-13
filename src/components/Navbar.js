import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{ backgroundColor: '#b4e4c4' }}
      data-aos="fade-down"
    >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-3 text-primary" href="/">
          Luigi<span style={{ color: '#1f3c88' }}>Portfolio</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#landing" className="nav-link fw-semibold fs-5 text-dark">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link fw-semibold fs-5 text-dark">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#tools" className="nav-link fw-semibold fs-5 text-dark">
                Tools
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link fw-semibold fs-5 text-dark">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link fw-semibold fs-5 text-dark">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}