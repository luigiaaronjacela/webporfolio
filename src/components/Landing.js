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
              I am currently working as a Design Engineer at Yazaki while actively pursuing full-stack development studies. My goal is to transition into a career in full-stack web development, where I can build dynamic, scalable, and user-focused applications. I am passionate about solving real-world problems through clean, efficient code and intuitive user experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}