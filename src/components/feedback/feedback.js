import React from 'react';
import './style.css';

function Feedback({ isOpen, text, setText }) {
  return (
    <fieldset className={`feedback__form ${isOpen && 'feedback__form_opened'}`}>
      <label className='feedback__label'>Расскажите подробнее...</label>
      <textarea
        className='feedback__textarea'
        id='comment'
        name='comment'
        placeholder='Ваш комментарий'
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </fieldset>
  );
}

export default Feedback;
