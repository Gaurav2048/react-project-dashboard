import React from 'react';
import Card from '../Cards/index';
import './project.scss';

const Project = () => {
  const projects = [
    {
      title: 'Cyberpunk277',
      imogi: '\u{1F60E}',
    },
    {
      title: 'Phantom of the Opera',
      imogi: '\u{1F60D}',
    },
    {
      title: 'Commercial for lays',
      imogi: '\u{1F60F}',
    },
    {
      title: 'React capsules',
      imogi: '\u{1F618}',
    },
    {
      title: 'Fastify Next to Express',
      imogi: '\u{1F929}',
    },
  ];
  return (
    <div className="project">
      <h1>Projects</h1>
      <h5>Current Projects</h5>
      <div className="card-container">
        {projects.map((project, index) => (
          <Card key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
