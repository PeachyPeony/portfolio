import data from "./data.json";
import Project from "./components/Project";

function App() {
  return (
    <main>
      <h1>My Portfolio</h1>

      {data.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </main>
  );
}

export default App;
