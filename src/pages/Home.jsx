import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-container">
        {/* Hero Section */}
        <div className="home-hero">
          <h1>
            Hi, I’m <span>Prajesh</span>
          </h1>

          <h2>
            Frontend Developer specializing in React & modern web interfaces
          </h2>

          <p>
            I build clean, responsive, and performance-focused web applications.
            My work centers on readable code, scalable UI architecture, and
            thoughtful user experience.
          </p>

          <div className="home-actions">
            <a href="/projects" className="btn primary">View Projects</a>
            <a href="/about" className="btn outline">About Me</a>
            <a href="/contact" className="btn secondary">Contact</a>
          </div>
        </div>

        {/* Highlights */}
        <div className="home-highlights">
          <div className="highlight-card">
            <h3>React Development</h3>
            <p>
              Building component-based UIs, SPAs, and interactive features using
              React, hooks, and modern JavaScript.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Responsive Interfaces</h3>
            <p>
              Mobile-first layouts using CSS Grid, Flexbox, and adaptive design
              principles. Fully accessible and cross-browser compatible.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Code Quality</h3>
            <p>
              Maintainable, reusable, and readable code following best practices
              and clean architecture. Always aiming for less technical debt.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Performance & UX</h3>
            <p>
              Focused on fast load times, accessibility, and smooth user
              interactions. Animations and transitions enhance the user experience.
            </p>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="home-skills">
          <h3>Core Technologies</h3>
          <ul>
            <li>React.js, JavaScript (ES6+)</li>
            <li>HTML5, CSS3, Flexbox, Grid</li>
            <li>React Router, Context API, Redux (optional)</li>
            <li>REST APIs, Fetch, Axios</li>
            <li>Git, GitHub, CLI</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="home-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        </div>

        {/* Footer Quote */}
        <div className="home-footer">
          <p>
            Code should be simple to read, easy to maintain, and hard to break.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
