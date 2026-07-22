import "./App.css";
import profile from "./assets/profile.png";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Adityamani Pandey</div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="container">
        <div className="hero">

          <img
            src={profile}
            alt="Adityamani Pandey"
            className="profile"
          />

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

      {/* About Section */}
      <section className="about" id="about">

        <h2>About Me</h2>

        <div className="about-content">

          <div className="about-text">

            <p>
              I am <strong>Adityamani Pandey</strong> from Mumbai. I have
              completed my Diploma in Computer Engineering and I'm currently
              learning Frontend Development using React. I enjoy building
              modern, responsive websites and continuously improving my
              technical skills by creating real-world projects.
            </p>

          </div>

          <div className="about-info">

            <p><strong>📍 Location:</strong> Mumbai</p>

            <p><strong>🎓 Education:</strong> Diploma in Computer Engineering</p>

            <p>
              <strong>💻 Skills:</strong> Computer Fundamentals, MS Office,
              HTML (Learning), CSS (Learning), JavaScript (Learning),
              React (Learning), Git & GitHub (Learning)
            </p>

            <p>
              <strong>🎯 Goal:</strong> Become a Professional Frontend Developer
              and build modern web applications.
            </p>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">

        <h2>My Skills</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>💻 Computer Fundamentals</h3>
            <p>
              Comfortable with Windows, Internet, File Management and basic computer operations.
            </p>
          </div>

          <div className="skill-card">
            <h3>📄 MS Office</h3>
            <p>
              Microsoft Word, Excel and PowerPoint.
            </p>
          </div>

          <div className="skill-card">
            <h3>🌐 HTML</h3>
            <p>
              Learning to build website structure.
            </p>
          </div>

          <div className="skill-card">
            <h3>🎨 CSS</h3>
            <p>
              Learning responsive and modern website design.
            </p>
          </div>

          <div className="skill-card">
            <h3>⚡ JavaScript</h3>
            <p>
              Learning programming fundamentals for web development.
            </p>
          </div>

          <div className="skill-card">
            <h3>⚛ React</h3>
            <p>
              Building modern frontend applications using React.
            </p>
          </div>

        </div>

      </section>

    </>
  );
}

export default App;