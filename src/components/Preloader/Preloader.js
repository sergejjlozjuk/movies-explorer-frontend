import React from 'react';
import './Preloader.css';

const Preloader = ({ hidden }) => {
  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className={`preloader__container ${hidden ? 'hidden' : ''}`}>
        <span className='preloader__round'></span>
      </div>
    </div>
  );
};

export default Preloader;
