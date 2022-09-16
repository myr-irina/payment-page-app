import React from 'react';
import './style.css';
import photo from './../../images/photo.svg';
import mark from './../../images/mark.svg';

function Profile() {
  return (
    <div className='profile'>
      <img className='profile__image' src={photo} alt='фото' />
      <div className='profile__wrapper'>
        <div className='profile__block'>
          <p className='profile__name'>Артур Гаврилов</p>
          <img src={mark} alt='галочка' />
        </div>
        <p className='profile__position'>Работает в компании Premier Tips</p>
        <p className='profile__desc'>Собираю на новый Genesis G90!</p>
      </div>
    </div>
  );
}

export default Profile;
