import "./App.css";
import data from "./data.json";
import Project from "./components/Project";

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">Alicia</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <p className="hero-greeting">HI, I'M ALICIA</p>
          <h1>Front-End<br />Developer</h1>
          <p className="hero-description">
            I’m a front-end developer in training who enjoys creating clean, responsive and user-friendly web experiences. Here are a few projects I’ve worked on and a little about me.
          </p>
          <a href="#projects" className="hero-button">
            View My Projects
            <span>→</span>
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-lavender"></div>
          <div className="hero-pink"></div>
          <div className="hero-green"></div>
          <div className="hero-orange"></div>
        </div>
      </header>

      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {data.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I'm a front-end developer in training who enjoys creating clean, friendly,
          and user-friendly websites. I like turning ideas into responsive interfaces
          and paying attention to the small details that make a website feel clear
          and enjoyable to use. I'm currently developing my skills in front-end
          development through hands-on projects and continuous learning.
        </p>
      </section>

      <section className="contact" id="contact">
        <h2>Let's Connect</h2>
        <p>Interested in working together or just want to say hello?</p>
        <a href="mailto:hello@example.com">Get in touch</a>
      </section>
    </main>
  );
}

export default App;
