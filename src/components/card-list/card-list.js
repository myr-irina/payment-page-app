import React, { useState } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { OPTIONS } from '../const';

function CardList({ setTips, activeButtonValue, setActiveButtonValue }) {
  // const [activeButtonValue, setActiveButtonValue] = useState(0);

  function handleClick(e) {
    const buttonValue = e.target.dataset.value;
    console.log({ buttonValue });
    setTips(buttonValue);
    setActiveButtonValue(+buttonValue);
  }

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
      {OPTIONS.map(value => (
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
