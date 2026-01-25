import { HiExternalLink } from 'react-icons/hi';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, link } = project;

  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img 
          src={image} 
          alt={title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-overlay" />
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
          <HiExternalLink className="project-link-icon" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
