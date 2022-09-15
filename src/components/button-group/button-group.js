import React, {useState} from 'react';
import './style.css';
import SpbIcon from './../../images/sbp-icon.svg';

function ButtonGroup({setTips}) {
const [isActiveButton, setIsActiveButton] = useState(0);

function handleClick(e) {
  e.preventDefault();
  const button = +e.target.dataset.id;
  setIsActiveButton(button);  
  setTips(0);
}
  
  return (
    <div className='button-group'>
      <button data-id="1" className={`button-group__button ${isActiveButton === 1 ? 'button_type_clicked': ''}`} onClick={handleClick}>
        Оплатить <img src={SpbIcon} alt='' /> сбп
      </button>
      <button  data-id="2" className={`button-group__button button_type_grey ${isActiveButton === 2 ? 'button_type_grey_clicked': ''} `} onClick={handleClick}>
        Оплатить картой
      </button>
    </div>
  );
}

export default ButtonGroup;
