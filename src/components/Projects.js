import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projectData = [
    {
      title: "Personal Portfolio Website ",
      img: "./images/card1.png",
      description:
        " Designed and developed a responsive personal portfolio to highlight professional projects, skills, and achievements. The site is optimized for mobile, tablet, and desktop viewing, providing a clean and engaging user experience. It serves as a central hub to showcase development capabilities and personal brand identity.",
      link: "https://webporfolio-6419.vercel.app/",
    },
    {
      title: "E-Commerce Workflow Management System",
      img: "../images/card2.png",
      description:
        " Developed a comprehensive RESTful API for an E-Commerce Workflow Management system, built with Node.js, Express, and MongoDB. The backend is designed to handle dynamic routing, secure user authentication, and efficient product and order management. This Postman documentation provides an organized, developer-friendly reference for all endpoints and usage instructions.",
      link: "https://documenter.getpostman.com/view/44619369/2sB2xCgos1",
    },
    {
      title: "E-Commerce Platform Development",
      img: "./images/card3.png",
      description:
        "•  A full-featured e-commerce workflow management system built using React for the frontend and a scalable Node.js/Express backend with MongoDB integration. The platform supports user registration, product browsing, cart management, and order processing. Admin users can manage product listings and view orders, enabling seamless business operations.",
      link:"https://b546-csp3.vercel.app/"
    },
    {
      title: "Static Educational Hub",
      img: "./images/card4.png",
      description:
        " Built a visually engaging and fully static educational website using HTML and CSS.CarHub demonstrates foundational front-end development skills and showcases a basic catalogue-style layout—ideal for showcasing vehicles or related educational content. The project highlights your ability to translate design into functional, responsive web pages.",
      link:"https://luigiaaronjacela.github.io/EducationalCarHub/"
    },
    {
      title: "MERN Movie",
      img: "./images/card5.png",
      description:
        " Built a visually engaging and fully static educational website using HTML and CSS.CarHub demonstrates foundational front-end development skills and showcases a basic catalogue-style layout—ideal for showcasing vehicles or related educational content. The project highlights your ability to translate design into functional, responsive web pages.",
      link:"https://movie-app-iota-brown-13.vercel.app/"
    },
    {
      title: "Full-Stack Blog Platform",
      img: "./images/card6.png",
      description:
        " • Built a full-stack blogging platform that allows users to create, read, update, and delete blog posts, as well as comment on posts. The app supports both regular users and admins, with secure JWT-based authentication and role-based access. The UI is clean, responsive, and optimized for user engagement and readability",
      link:"https://blog-app-react-one.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#eafaf1' }}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#1f3c88' }}>My Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    height: '240px',
                    width: '240px',
                    objectFit: 'contain',
                    margin: '0 auto',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a> : project.title}
                  </h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}