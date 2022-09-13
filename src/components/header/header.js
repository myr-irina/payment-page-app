import React from 'react';
import './style.css'
import wifi from './../../images/wifi.svg';
import mobileSignal from './../../images/mobile-signal.svg';
import battery from './../../images/battery.svg';


function Header() {
  return (
    <header className='header'>
      <p className="header__time">9:41</p>
      <div className="header__group">
        <img src={mobileSignal} alt="" />
        <img src={wifi} alt="" />
        <img src={battery} alt="" />  
      </div>
    </header>
  )
}

export default Header