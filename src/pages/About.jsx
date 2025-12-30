import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <p className="about-intro">
          I’m <strong>Prajesh</strong>, a frontend developer passionate about
          building clean, responsive, and performance-oriented web applications.
          I enjoy transforming ideas into intuitive user interfaces using
          modern web technologies. My focus is on creating scalable solutions
          that are easy to maintain, fast, and provide seamless user experiences.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              A self-driven frontend developer with expertise in HTML, CSS,
              JavaScript, and React. I value clean code, clarity, and
              consistency over flashy but fragile solutions. I enjoy learning
              new frameworks, experimenting with modern tools, and keeping
              up-to-date with best practices in web development.
            </p>
          </div>

          <div className="about-card">
            <h3>What I Do</h3>
            <p>
              I specialize in building reusable React components, implementing
              responsive layouts, and improving user experience through
              thoughtful UI decisions. I also focus on accessibility, performance,
              and scalable application architecture. I have experience integrating
              APIs, optimizing load times, and creating interactive, user-friendly
              interfaces.
            </p>
          </div>

          <div className="about-card">
            <h3>How I Work</h3>
            <p>
              My workflow is structured around efficiency, scalability, and quality.
              I break complex problems into smaller tasks, prioritize maintainable
              solutions, and continuously learn new patterns and techniques. I
              enjoy collaborating with teams and contributing to open-source projects.
            </p>
          </div>

          <div className="about-card">
            <h3>Skills & Tools</h3>
            <p>
              Core Skills: React.js, JavaScript (ES6+), HTML5, CSS3, Flexbox,
              Grid, Responsive Design, React Router, Context API, Redux, Git, GitHub, CLI.
              <br />
              Tools & Practices: VSCode, Chrome DevTools, REST APIs, Fetch, Axios,
              Agile workflow, and performance optimization techniques.
            </p>
          </div>
        </div>

        <div className="about-timeline">
          <h2>My Journey</h2>

          <div className="timeline-item">
            <span className="year">2022</span>
            <p>
              Built a strong foundation in HTML, CSS, and JavaScript. Started
              personal projects to practice problem-solving and core development
              concepts. Explored basic responsive design and version control.
            </p>
          </div>

          <div className="timeline-item">
            <span className="year">2023</span>
            <p>
              Transitioned to React development. Created multiple projects using
              hooks, component-based architecture, state management, and routing.
              Learned Context API, Redux, and API integration for dynamic apps.
            </p>
          </div>

          <div className="timeline-item">
            <span className="year">2024</span>
            <p>
              Focused on responsive design, advanced CSS (Flexbox & Grid), and
              animations to enhance UX. Built a professional portfolio showcasing
              projects and practical implementations of modern web practices.
            </p>
          </div>

          <div className="timeline-item">
            <span className="year">2025</span>
            <p>
              Expanding knowledge in full-stack basics and advanced React patterns.
              Improving performance, accessibility, and writing highly maintainable
              code. Collaborating on larger projects and contributing to open-source
              communities.
            </p>
          </div>

          <div className="timeline-item">
            <span className="year">Achievements</span>
            <p>
              - Developed 10+ React-based projects including portfolio, blogs, and e-commerce templates.<br />
              - Optimized websites for faster load times and mobile responsiveness.<br />
              - Learned and applied best practices for scalable component design.<br />
              - Contributed to collaborative coding projects and GitHub repositories.
            </p>
          </div>
        </div>

        <div className="about-footer">
          <p>
            I’m always looking to grow, explore new technologies, and create
            impactful user experiences. Code should be elegant, maintainable,
            and accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
