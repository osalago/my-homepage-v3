import { ProjectCard } from '../../ui';
import { projects } from '../../../data';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Here are some of my recent works. Each project showcases different
            technologies and problem-solving approaches.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
