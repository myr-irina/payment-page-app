import React from 'react';
import './style.css';
import SpbIcon from './../../images/sbp-icon.svg';

function ButtonGroup() {
  return (
    <div className='button-group'>
      <button className='button-group__button'>
        Оплатить <img src={SpbIcon} alt='' /> спб
      </button>
      <button className='button-group__button button_type_grey'>
        Оплатить картой
      </button>
    </div>
  );
}

export default ButtonGroup;
