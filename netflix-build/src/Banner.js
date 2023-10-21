import React from 'react';
import './Banner.css';

// ************************************************
//Look into optimizing banner styling into css file
// ************************************************

function Banner() {
  return (
    <header 
     className='banner' 
     style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://www.travellingbookjunkie.com/wp-content/uploads/2021/01/14019907992_0544000a68_c.jpg)`,
        backgroundPosition: "center center",
    }}
    >
        <div className='banner__contents'>
            <h1 className='banner__title'>Movie Name</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
        </div>
    </header>
  )
}

export default Banner;
