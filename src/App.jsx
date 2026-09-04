import "./App.css";
import profile from "./assets/profile.png";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Adityamani Pandey</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="container">
        <div className="hero">
          <img src={profile} alt="Adityamani Pandey" className="profile" />
          <h1>Hi, I'm Adityamani Pandey 👋</h1>
          <h2>Aspiring Frontend Developer</h2>
          <p>
            I build modern websites and I'm learning React to become a
            professional Frontend Developer.
          </p>

          <div className="buttons">
            <button className="btn">📄 Download Resume</button>
            <button className="btn">📞 Contact Me</button>
          </div>
        </div>
      </div>

      <section className="about" id="about">
        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am <strong>Adityamani Pandey</strong> from Mumbai. I have
              completed my Diploma in Computer Engineering and I'm currently
              learning Frontend Development using React.
            </p>
          </div>

          <div className="about-info">
            <p><strong>📍 Location:</strong> Mumbai</p>
            <p><strong>🎓 Education:</strong> Diploma in Computer Engineering</p>
            <p>
              <strong>💻 Skills:</strong> Computer Fundamentals, MS Office,
              HTML, CSS, JavaScript, React, Git & GitHub
            </p>
            <p>
              <strong>🎯 Goal:</strong> Become a Professional Frontend Developer.
            </p>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>💻 Computer Fundamentals</h3>
            <p>Comfortable with Windows and computer operations.</p>
          </div>

          <div className="skill-card">
            <h3>📄 MS Office</h3>
            <p>Word, Excel and PowerPoint.</p>
          </div>

          <div className="skill-card">
            <h3>🌐 HTML</h3>
            <p>Learning website structure.</p>
          </div>

          <div className="skill-card">
            <h3>🎨 CSS</h3>
            <p>Learning responsive design.</p>
          </div>

          <div className="skill-card">
            <h3>⚡ JavaScript</h3>
            <p>Learning programming.</p>
          </div>

          <div className="skill-card">
            <h3>⚛ React</h3>
            <p>Building modern frontend applications.</p>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>My Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3>🌐 Personal Portfolio</h3>
            <p>A responsive portfolio built with React.</p>

            <div className="buttons">
              <a
                href="https://portfolio-orpin-omega-78.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">🌐 Live Demo</button>
              </a>

              <a
                href="https://github.com/Adityamani-Dev/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">💻 GitHub</button>
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>🌍 Travel Freaks</h3>

            <p>
  A modern React travel information platform designed to help travellers
  discover destinations, explore useful travel information, and plan better trips.
</p>

            <div className="buttons">
              <a
                href="https://travelfreaks.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">🌐 Live Demo</button>
              </a>

              <a
                href="https://github.com/Adityamani-Dev/travel-freaks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">💻 GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>

            <p>📍 Mumbai, India</p>
            <p>📧 connectwithadityamani@gmail.com</p>
            <p>📱 +91 8082360745</p>
            <p>💻 github.com/Adityamani-Dev</p>
          </div>

          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea rows="6" placeholder="Your Message"></textarea>

              <button className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3>Adityamani Pandey</h3>

        <p>Designed & Developed using React ❤️</p>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © 2026 Adityamani Pandey. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;