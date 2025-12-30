import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Personal Portfolio Website",
    overview:
      "A multi-page personal portfolio designed to present skills, projects, and background in a clear and professional way.",
    responsibilities: [
      "Designed and implemented a component-based UI using React",
      "Built multi-page navigation using React Router",
      "Applied responsive layouts for mobile, tablet, and desktop",
      "Focused on clean structure and readable code",
    ],
    features: [
      "Multi-page routing",
      "Reusable components",
      "Responsive navigation",
      "Modern dark UI theme",
    ],
    tech: ["React", "CSS", "React Router"],
    live: "#",
    github: "#",
  },
  {
    title: "Watch Store Landing Page",
    overview:
      "A responsive product landing page created to practice modern layout techniques and visual hierarchy.",
    responsibilities: [
      "Designed layout using Flexbox and CSS Grid",
      "Implemented responsive sections for different screen sizes",
      "Improved typography and spacing for better readability",
    ],
    features: [
      "Product showcase layout",
      "Mobile-first design",
      "Clean and minimal UI",
    ],
    tech: ["HTML", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "To-Do List Application",
    overview:
      "A simple task management app focused on JavaScript fundamentals and DOM manipulation.",
    responsibilities: [
      "Implemented task add and delete functionality",
      "Managed application state using JavaScript",
      "Handled user interactions and input validation",
    ],
    features: [
      "Add and remove tasks",
      "Clean and minimal interface",
      "Basic state management",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>

        <p className="projects-intro">
          Selected projects demonstrating real-world frontend development,
          structured problem-solving, and clean, maintainable code.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-overview">{project.overview}</p>

                <div className="project-section">
                  <h4>Responsibilities</h4>
                  <ul>
                    {project.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
