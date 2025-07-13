import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Tools() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const tools = {
    frontEnd: [
      { src: "/images/html.png", alt: "HTML" },
      { src: "/images/css.png", alt: "CSS" },
      { src: "/images/bootstrap.png", alt: "Bootstrap" },
      { src: "/images/javascript.png", alt: "JavaScript" },
    ],
    mern: [
      { src: "/images/mongodb.png", alt: "MongoDB" },
      { src: "/images/express.png", alt: "Express" },
      { src: "/images/react.png", alt: "React" },
      { src: "/images/node.png", alt: "Node.js" },
    ],
    other: [
      { src: "/images/heroku.png", alt: "Heroku" },
      { src: "/images/git.png", alt: "Git" },
      { src: "/images/postman.png", alt: "Postman" },
      { src: "/images/sublime.png", alt: "Sublime" },
    ]
  };

  const renderToolIcons = (toolsArray) => (
    <div className="row justify-content-center mt-3">
      {toolsArray.map((tool, index) => (
        <div
          key={index}
          className="col-6 col-md-3 col-lg-2 mb-4 d-flex flex-column align-items-center"
          data-aos="fade-up"
        >
          <img
            src={tool.src}
            alt={tool.alt}
            className="img-fluid mb-2"
            style={{
              maxHeight: '100px',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <span className="fw-bold" style={{ color: '#1f3c88' }}>{tool.alt}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="tools" className="py-5" style={{ backgroundColor: '#dff5e3' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4" style={{ color: '#1f3c88' }}>Tools</h2>

        <div className="accordion" id="toolsAccordion">
          {/* Front End */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFrontEnd">
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFrontEnd"
                aria-expanded="true"
                aria-controls="collapseFrontEnd"
              >
                Front End
              </button>
            </h2>
            <div
              id="collapseFrontEnd"
              className="accordion-collapse collapse show"
              aria-labelledby="headingFrontEnd"
              data-bs-parent="#toolsAccordion"
            >
              <div className="accordion-body">{renderToolIcons(tools.frontEnd)}</div>
            </div>
          </div>

          {/* MERN Stack */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingMERN">
              <button
                className="accordion-button fw-bold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseMERN"
                aria-expanded="false"
                aria-controls="collapseMERN"
              >
                MERN Stack
              </button>
            </h2>
            <div
              id="collapseMERN"
              className="accordion-collapse collapse"
              aria-labelledby="headingMERN"
              data-bs-parent="#toolsAccordion"
            >
              <div className="accordion-body">{renderToolIcons(tools.mern)}</div>
            </div>
          </div>

          {/* Other Tools */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOther">
              <button
                className="accordion-button fw-bold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOther"
                aria-expanded="false"
                aria-controls="collapseOther"
              >
                Other Tools
              </button>
            </h2>
            <div
              id="collapseOther"
              className="accordion-collapse collapse"
              aria-labelledby="headingOther"
              data-bs-parent="#toolsAccordion"
            >
              <div className="accordion-body">{renderToolIcons(tools.other)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}