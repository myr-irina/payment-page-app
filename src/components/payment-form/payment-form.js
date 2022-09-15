import React, { useState } from 'react';
import CardList from '../card-list/card-list';
import Rating from '../rating/rating';
import Feedback from '../feedback/feedback';
import ButtonGroup from '../button-group/button-group';
import './style.css';
import closeBtn from './../../images/close-button.svg';
import numberFormat from './../../utils/number-format';
import { FEE_RATE } from '../const';

function PaymentForm() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [tips, setTips] = useState(0);

  const onMouseClick = () => {
    setIsFeedbackOpen(true);
  };

  const onDoubleClick = () => {
    setIsFeedbackOpen(false);
  };

  const onCloseButton = () => {
    setTips(0)
  }
  
  const fee = Math.trunc(tips * FEE_RATE);
  
  return (
    <form className='form' type='submit'>
      <div className='input-block'>
        <input className='input-tips'
          type='number'
          value={tips}
          onChange={e => 
            {setTips(numberFormat(+e.target.value))}}
        />
        {/* <span className='input-tips__currency'>₽</span> */}

        <button type='button' className='close-button' onClick={onCloseButton}>
          <img src={closeBtn} alt='кнопка закрытия' />
        </button>
      </div>
      <CardList setTips={setTips} />
      <Rating onFeedbackOpen={onMouseClick} onFeedbackClose={onDoubleClick} />
      <Feedback isOpen={isFeedbackOpen} />
      <ButtonGroup setTips={setTips} />
      <label>
        <input
          className='form__checkbox form__input'
          id='checkbox-input'
          type='checkbox'
        />
        <span className='form__checkbox-item'></span>
        <span className='form__text'>
          Я хочу компенсировать комиссию сервиса транзакций {fee} руб., чтобы
          покрыть издержки за перевод средств сотруднику
        </span>
      </label>
      <p>
        Нажимая на кнопку «Оплатить», вы соглашаетесь с условиями оферты,
        политикой безопасности платежей, согласием на обработку персональных
        данных, противодействием терроризму.
      </p>
    </form>
  );
}

export default PaymentForm;
