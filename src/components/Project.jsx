function Project({ project }) {
    return (
        <article className="project-card">
            <h2>{project.name}</h2>

            <div className="project-card-content">
                <img src={project.image} alt={project.name} />

                <div className="project-info">
                    <ul>
                        {project.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>

                    <div className="project-links">
                        <a href={project.cloudflare} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Project;