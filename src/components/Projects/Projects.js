import React from 'react';
import './Projects.css';
import project1 from '../../assets/website-design.png'; // Example image
import project2 from '../../assets/app-design.png'; // Example image

const projects = [
  {
    title: 'Project One',
    description: 'A description of project one.',
    img: project1,
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A description of project two.',
    img: project2,
    link: '#'
  }
];

const Projects = () => (
  <section id='projects'>
    <h2 className='projects__title'>Projects</h2>
    <div className='projects__container'>
      {projects.map((project, index) => (
        <div key={index} className='project'>
          <img src={project.img} alt={project.title} className='project__img' />
          <h3 className='project__title'>{project.title}</h3>
          <p className='project__description'>{project.description}</p>
          <a href={project.link} className='project__link'>View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
