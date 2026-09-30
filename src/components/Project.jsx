function Project({ project }) {
    return (
        <article>
            <h2>{project.name}</h2>

            <ul>
                {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </article>
    );
}

export default Project;