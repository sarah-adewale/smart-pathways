
import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ title, subtitle, image, className }) => {

  return (
    
    <div className={`card ${className}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );

};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
