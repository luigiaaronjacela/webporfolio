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
              With a degree in Electronics Engineering (BSECE) and current experience as a Design Engineer at Yazaki, I have developed strong analytical and problem-solving skills. To shift into the IT field, I completed full-stack web development training with Zuitt. While my primary goal is to become a full-stack developer, I am also open to other roles related to IT where I can apply my technical skills, continue learning, and grow professionally in the tech industry.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}