import React from 'react';
import { Element } from 'react-scroll'
import './ProjectContainer.css'

const Project = ({ title, description, image }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ProjectContainer = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Train Tracking System',
      image: 'https://images.unsplash.com/photo-1587573088697-b4fa10460683?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Project 2',
      description: 'Employee Management System',
      image: 'https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Project 3',
        description: 'Todo List',
        image: 'https://images.unsplash.com/photo-1518976024611-28bf4b48222e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }
    // Add more projects as needed
  ];

  return (
    <div className="projects-page">
         <Element name="projects" className="element">
      <h1>Projects</h1>
      <p>Explore some of my exciting projects below:</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
      </Element>
    </div>
  );
};

export default ProjectContainer;
