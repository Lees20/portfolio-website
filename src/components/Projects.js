import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    { title: 'Project One', description: 'Description of project one', image: 'path/to/image1.jpg' },
    { title: 'Project Two', description: 'Description of project two', image: 'path/to/image2.jpg' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
