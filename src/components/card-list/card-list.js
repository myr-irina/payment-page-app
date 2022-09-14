import React, { useState } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CardList({ setTips }) {
 
  const [activeButtonValue, setActiveButtonValue] = useState(0);

  function handleClick(e) {
    const buttonValue = +e.target.dataset.value;
    console.log({ buttonValue });
    setTips(buttonValue);
    setActiveButtonValue(buttonValue);
  } 
  //вынести в utils const
  const arr = [100, 250, 500, 1000, 2500];

  return (
    <Swiper
      tag='section'
      wrapperTag='ul'
      id='main'
      loop={false}
      slidesPerView={4}
      className='card-list'
      onInit={swiper => console.log('Swiper initialized!', swiper)}
      onSlideChange={swiper => {
        console.log('Slide index changed to: ', swiper.activeIndex);
      }}
      onReachEnd={() => console.log('Swiper end reached')}
    >
      {arr.map(value => (
        <SwiperSlide key={`slide-${value}`} style={{ listStyle: 'none' }}>
          <button
            data-value={value}
            className={`card-list__card ${
              value === activeButtonValue ? 'card_type_clicked' : ''
            }`}
            type='button'
            onClick={handleClick}
          >
            {value} &#8381;
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardList;
