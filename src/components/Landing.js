import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="landing"
      className="py-5"
      style={{ backgroundColor: '#dff5e3' }}
    >
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center" data-aos="fade-right">
            <img
              src="/images/luigi2.png"
              alt="Luigi"
              className="img-fluid rounded-circle"
              style={{ maxWidth: '300px' }}
            />
          </div>

          {/* Text */}
          <div className="col-md-6" data-aos="fade-left">
            <h1 className="fw-bold" style={{ color: '#1f3c88' }}>
              Hi! I'm Luigi Jacela
            </h1>
            <p className="lead mt-3">
              I’m a BSECE graduate with a strong background in problem-solving and technical analysis. After completing full-stack web development training with Zuitt, I’m now transitioning into the IT field. My goal is to become a full-stack developer, but I’m also open to other IT-related roles where I can grow, contribute, and apply my skills in building impactful digital solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}