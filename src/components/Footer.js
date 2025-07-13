import React from 'react';

export default function Footer() {
  return (
    <footer
      className="py-4 mt-5"
      style={{ backgroundColor: '#eafaf1', color: '#1f3c88' }}
    >
      <div className="container text-center">
        <h5 className="fw-bold mb-1" style={{ color: '#1f3c88' }}>Luigi Aaron Jacela</h5>
        <p className="mb-1">Aspiring Full Stack Developer</p>
        <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}