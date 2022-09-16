import React, { useState } from 'react';
import CardList from '../card-list/card-list';
import Rating from '../rating/rating';
import Feedback from '../feedback/feedback';
import ButtonGroup from '../button-group/button-group';
import './style.css';
import closeBtn from './../../images/close-button.svg';
import { FEE_RATE } from '../const';

function PaymentForm() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [tips, setTips] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');
  const [activeButtonValue, setActiveButtonValue] = useState(0);

  const onMouseClick = () => {
    setIsFeedbackOpen(true);
  };

  const onDoubleClick = () => {
    setIsFeedbackOpen(false);
  };

  const onCloseButton = () => {
    setTips('');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setTips('');
    setRating(0);
    setHoverRating(0);
    onDoubleClick();
    setText('');
    setActiveButtonValue(0);
  };

  const rub = parseInt(tips * FEE_RATE);
  const kop = Math.trunc(((tips * FEE_RATE) % rub) * 100);

  return (
    <form className='form' type='submit' onSubmit={onFormSubmit}>
      <div className='input-block'>
        <input
          className='input-tips'
          type='text'
          value={tips.includes('₽') ? tips : `${tips} ₽`}
          onChange={e => {
            setTips(e.target.value);
          }}
          placeholder='0 ₽'
        />

        <button type='button' className='close-button' onClick={onCloseButton}>
          <img src={closeBtn} alt='кнопка закрытия' />
        </button>
      </div>
      <CardList
        setTips={setTips}
        activeButtonValue={activeButtonValue}
        setActiveButtonValue={setActiveButtonValue}
      />
      <Rating
        onFeedbackOpen={onMouseClick}
        onFeedbackClose={onDoubleClick}
        rating={rating}
        setRating={setRating}
        hoverRating={hoverRating}
        setHoverRating={setHoverRating}
      />
      <Feedback isOpen={isFeedbackOpen} text={text} setText={setText} />
      <ButtonGroup setTips={setTips} />

      <input className='custom-checkbox' id='checkbox-input' type='checkbox' />
      <label className='form__field' htmlFor='checkbox-input'>
        {!kop ? (
          <span className='form__text'>
            Я хочу компенсировать комиссию сервиса транзакций {rub} руб., чтобы
            покрыть издержки за перевод средств сотруднику.
          </span>
        ) : (
          <span className='form__text'>
            Я хочу компенсировать комиссию сервиса транзакций {rub} руб. {kop}{' '}
            коп., чтобы покрыть издержки за перевод средств сотруднику
          </span>
        )}
      </label>

      <p className='form__text'>
        Нажимая на кнопку «Оплатить», вы соглашаетесь с условиями&nbsp;
        <a
          className='form__link'
          href='https://www.google.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          оферты, политикой безопасности платежей, согласием на обработку
          персональных данных, противодействием терроризму.
        </a>
      </p>
    </form>
  );
}

export default PaymentForm;
