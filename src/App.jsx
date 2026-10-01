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
        <p className="hero-greeting">Hello, I'm</p>
        <h1>Alicia</h1>
        <p className="hero-description">
          A front-end developer in training, creating friendly and thoughtful web experiences.
        </p>
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
        <p>I'm a front-end developer in training who enjoys creating clean,
          friendly, and user-friendly websites.
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
