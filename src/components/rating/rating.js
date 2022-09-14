import React, { useState } from 'react';
import RatingIcon from '../rating-icon/rating-icon';
import './style.css';

function Rating({ onFeedbackOpen, onFeedbackClose }) {
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

  const onDoubleClick = () => {
    setRating(0);
    setHoverRating(0);
    onFeedbackClose();
  };

  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map(index => {
        return (
          <RatingIcon
            key={index}
            index={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
            onOpen={onFeedbackOpen}
            {...(index === 1 ? { onDoubleClick } : {})}
          />
        );
      })}
    </div>
  );
}

export default Rating;
