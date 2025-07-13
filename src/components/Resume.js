import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: '#1f3c88' }}>
        My Resume
      </h2>

      <div className="d-flex justify-content-center mb-4">
        <iframe
          src="/resume/luigi-resume.pdf"
          title="Luigi Resume"
          width="100%"
          height="600px"
          style={{ border: '2px solid #1f3c88', borderRadius: '10px' }}
        ></iframe>
      </div>

      <div className="text-center d-flex flex-column align-items-center gap-3">
        <a
          href="/resume/luigi-resume.pdf"
          download
          className="btn btn-success fw-bold"
        >
          ⬇ Download PDF
        </a>

        <button
          onClick={() => navigate('/')}
          className="btn btn-outline-primary fw-bold"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
