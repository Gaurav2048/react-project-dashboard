import React from 'react';
import Likes from './Likes';
import './card.scss';

const Card = ({ data }) => {
  const { title, imogi } = data;
  return (
    <div className="project-card">
      <div className="card-header">
        <div className="card-img">
          <p>{imogi}</p>
        </div>

        <div className="header-text">
          <div>Fastify224</div>
          <Likes />
        </div>
      </div>

      <div className="card-body">
        <p>Theater actor who can sing and dance</p>
      </div>

      <div className="card-footer">
        <div className="casting">
          <div className="count">7</div>
          <div className="label">Castings</div>
        </div>
        <div className="dod">
          <div className="count">21.07.09</div>
          <div className="label">Due Date</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
