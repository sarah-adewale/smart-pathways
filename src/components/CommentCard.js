// CommentCard.js
import React from 'react';
import PropTypes from 'prop-types';
// import './CommentCard.css';

const CommentCard = ({ comm, named, school}) => {
  // Extracting the first 10 words
  const truncatedText = comm.split(' ').slice(0, 13).join(' ');
  
// console.log(`${named}, ${truncatedText}`)
  return (
    <div className="comment-card">
      <p className="truncated-text">{truncatedText}</p>
      <div className="full-text" >
        <p >{comm} </p>
        <div className='mt-20 truncated-user-section'>
            <span className='named client-name' style={{color: "#DDD4D5"}}>{named}</span>
            <p className='named client-company'>{school}</p>
        </div>
        
      </div>
      <div className='user-section'>
        <p className='client-name'>{named}</p>
        <p className='client-company'>{school}</p>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  comm: PropTypes.string.isRequired,
  named: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
//   comm: PropTypes.string.isRequired,
};

export default CommentCard;
