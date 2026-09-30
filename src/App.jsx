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

        {data.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </section>
    </main>
  );
}

export default App;
