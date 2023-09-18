import React from 'react';
import './Card.css'; // Import your CSS file for the card styles

const  Card = ({ image, title, description }) => {
  return (
    
      <div className='card-container'>
      <div className="card">
        <div className="card-image">
          <img  src={image} alt='image'/>
        </div>
        <div className='content'>
        <h3 className="title">{title}</h3>
        <p className="text" style={{ whiteSpace: 'pre-wrap' }} >{description}</p>
        
        </div>
      </div>
      </div>
    
  );
};

export default Card;
