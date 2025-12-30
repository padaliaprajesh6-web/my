import React, { useEffect } from "react";
import "./Skills.css";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: "95%" },
      { name: "CSS3 / Flexbox / Grid", level: "90%" },
      { name: "JavaScript (ES6+)", level: "85%" },
      { name: "React.js", level: "80%" },
      { name: "Responsive Design", level: "90%" },
    ],
  },
  {
    title: "UI Frameworks & Styling",
    skills: [
      { name: "Bootstrap", level: "85%" },
      { name: "Tailwind CSS", level: "80%" },
      { name: "Material UI", level: "70%" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", level: "70%" },
      { name: "Express.js", level: "65%" },
      { name: "Git & GitHub", level: "85%" },
      { name: "REST APIs", level: "75%" },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".skills-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            const bars = entry.target.querySelectorAll(".skill-progress");
            bars.forEach((bar) => {
              bar.style.width = bar.dataset.width;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="skills-page">
      <div className="skills-container">
        <h1 className="skills-title">Technical Skills</h1>

        <p className="skills-intro">
          I specialize in crafting responsive, performance-driven web interfaces
          with a strong focus on usability and clean architecture. My workflow
          emphasizes maintainable code, scalable design systems, and continuous
          improvement.
        </p>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="skills-card" key={index}>
              <h3>{category.title}</h3>

              {category.skills.map((skill, i) => (
                <div className="skill-row" key={i}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>

                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <p>
            Beyond technical proficiency, I focus on writing scalable code,
            collaborating effectively with teams, and adapting quickly to new
            tools and frameworks as the web ecosystem evolves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
