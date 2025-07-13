import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projectData = [
    {
      title: "E-commerce API Documentation",
      img: "./images/card1.png",
      description:
        "Dynamic E-Commerce Workflow Management. The system features dynamic routes for order processing, real-time inventory updates, and secure user authentication.",
      link: "https://documenter.getpostman.com/view/44619369/2sB2xCgos1",
    },
    {
      title: "Course Booking API Documentation",
      img: "../images/card2.png",
      description:
        "RESTful API for managing course enrollments, featuring user registration, authentication, and retrieval of user details.",
    },
    {
      title: "Course Booking App",
      img: "./images/card3.png",
      description:
        "A MERN-stack course enrollment system featuring user registration, authentication, and profile management.",
    },
    {
      title: "E-commerce App",
      img: "./images/card4.png",
      description:
        "MERN E-Commerce Platform with product catalog, secure checkout, and admin dashboard.",
    },
    {
      title: "Airline Booking System Mockup",
      img: "./images/card5.png",
      description:
        "Conceptual design showcasing UI for flight search, seat selection, and booking confirmation.",
    },
    {
      title: "Airline Booking System Prototype",
      img: "./images/card6.png",
      description:
        "Interactive prototype simulating flight search, reservation, payment, and real-time ticketing.",
    },
    {
      title: "Short Courses Capstone",
      img: "./images/card7.png",
      description:
        "Portfolio website using HTML, CSS, Bootstrap with responsive layout, lightbox gallery, and animations.",
    },
    {
      title: "Short Courses Capstone",
      img: "./images/card8.png",
      description: "Placeholder for your Short courses capstone project.",
    },
    {
      title: "Short Courses Capstone",
      img: "./images/card9.png",
      description: "Placeholder for your Short courses capstone project.",
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