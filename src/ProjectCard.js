function ProjectCard(props) {
    return (
        <div className="ProjectCard">
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title} />
            <p>{props.description}</p>
            <a className="App-link" href={props.link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
}

export default ProjectCard;