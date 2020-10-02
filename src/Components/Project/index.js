import React from 'react';
import Card from '../Cards/index';
import './project.scss';

const Project = () => {
  return (
    <div className="project">
      <h1>Projects</h1>
      <h5>Current Projects</h5>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Project;
