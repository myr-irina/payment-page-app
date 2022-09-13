import React from 'react';
import StarIcon from '../star-icon/star-icon';

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
    onFeedbackOpen,
  } = props;

  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return '#377BFF';
    } else if (!hoverRating && rating >= index) {
      return '#377BFF';
    }
    return 'none';
  }, [rating, hoverRating, index]);

  const stroke = React.useMemo(() => {
    if (hoverRating >= index) {
      return 'none';
    } else if (!hoverRating && rating >= index) {
      return 'none';
    }
    return '#BCBCBC';
  }, [rating, hoverRating, index]);

  return (
    <div
      className='rating-icon'
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => {
        onSaveRating(index);
        onFeedbackOpen();
      }}
    >
      <StarIcon fill={fill} stroke={stroke} />
    </div>
  );
}

export default RatingIcon;
