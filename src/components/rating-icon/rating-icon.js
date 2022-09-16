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
    onOpen,
    onDoubleClick,
  } = props;

  const svgData = React.useMemo(() => {
    if (hoverRating >= index) {
      return {
        fill: '#377BFF',
        stroke: 'none',
      };
    } else if (!hoverRating && rating >= index) {
      return {
        fill: '#377BFF',
        stroke: 'none',
      };
    }
    return {
      fill: 'none',
      stroke: '#BCBCBC',
    };
  }, [rating, hoverRating, index]);

  return (
    <div
      className='rating-icon'
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
      onClick={() => {
        onSaveRating(index);
        onOpen();
      }}
      onDoubleClick={onDoubleClick}
    >
      <StarIcon svgData={svgData} />
    </div>
  );
}

export default RatingIcon;
