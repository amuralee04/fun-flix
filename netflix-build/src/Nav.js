import React from 'react';
import "./Nav.css";

function Nav() {
  return (
    <div className='nav nav__black'>
        <div className='nav__contents'>
            <img 
                className='nav__logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt=""
            />
            
            <img 
            className='nav__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt=""
            />
        </div>    
    </div>
  )
}

export default Nav
