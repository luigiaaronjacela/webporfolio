import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: '#dff5e3' }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-4"
          style={{ color: '#1f3c88' }}
          data-aos="fade-up"
        >
          Contact
        </h2>

        <div className="row">
          {/* Map */}
          <div
            className="col-md-6 mb-4"
            data-aos="fade-right"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.4437353131021!2d120.9223337696836!3d14.32450149913311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d51eca5f463f%3A0x1bc6ddfdc5e34a84!2sSan%20Francisco%2C%20General%20Trias%2C%20Cavite!5e0!3m2!1sen!2sph!4v1743417150166!5m2!1sen!2sph"
              style={{ border: 0, width: '100%', height: '300px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Form & Socials */}
          <div
            className="col-md-6"
            data-aos="fade-left"
          >
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>

              <div className="d-flex align-items-center gap-3">
                <a href="https://facebook.com/luwijacela" target="_blank" rel="noreferrer">
                  <img src="/images/facebook.png" alt="Facebook" width="30" />
                </a>
                <a href="https://linkedin.com/in/luigi-aaron-jacela-791750173/" target="_blank" rel="noreferrer">
                  <img src="/images/linkedin.png" alt="LinkedIn" width="30" />
                </a>
                <a href="https://github.com/luigiaaronjacela" target="_blank" rel="noreferrer">
                  <img src="/images/github.png" alt="GitHub" width="30" />
                </a>

                <button
                  type="button"
                  className="btn btn-primary ms-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#thankYouModal"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
            <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card p-4 shadow-sm text-center border-0" style={{ backgroundColor: '#dff6ff' }}>
              <h5 className="fw-bold text-primary">Want to know more?</h5>
              <p>Check out my full resume for experience, education, and skills.</p>
              <Link to="/resume" className="btn btn-success fw-bold px-4">
                📄 View My Resume
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="thankYouModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thank you!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">I will get to you shortly.</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}