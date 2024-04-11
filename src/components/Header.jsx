import React from 'react';
import '../App.css';

function Header() {
  return (
    <div className="header-container">
        <div className='text'>
            <div className='text1'>
      <p className="logoh1 ">clearlydecoded/</p>
      
      <h1 className='logoh1 h1'>html-css-</h1>
      </div>
      <div className='text2'>
      <h1 className='logoh1 h2'>
      javascript-tutorial</h1>
      </div>
      </div>
      <div className='img'>
      <img src="logo.png" className="logo-img" alt="Notification Bell Icon" />
      </div>
    </div>
  );
}

export default Header;