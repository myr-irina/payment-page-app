import React, { useState } from 'react';
import starIcon from './../../images/star.svg';
import RatingIcon from '../rating-icon/rating-icon';
import './style.css';

function Rating({ onFeedbackOpen }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = index => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = index => {
    setRating(index);
  };

  const onDoubleClick = index => {
    // setRating(0);
    // setHover(0);
  };

  return (
    <div className='rating'>
      {[...Array(5).keys()].map(index => {
        return (
          <RatingIcon
            key={index}
            index={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
            onFeedbackOpen={onFeedbackOpen}
          />
        );
      })}
    </div>
  );
}

export default Rating;
