import styles from '../styles/ProjectsSection.module.scss';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

const ProjectsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.half}>
        {
          projects
          .slice(0, Math.ceil(projects.length / 2))
          .map(project => <ProjectCard key={project.id} {...project} />)
        }
      </div>

      <div className={styles.half}>
        {
          projects
          .slice(Math.ceil(projects.length / 2))
          .map(project => <ProjectCard key={project.id} {...project} />)
        }
      </div>
    </div>
  )
}

export default ProjectsSection