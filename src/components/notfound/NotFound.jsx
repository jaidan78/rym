import React from 'react';
import style from './NotFound.module.css';

import notFound from '../../images/notFound.jpg';

const { container, notImg } = style;

const NotFound = () => {
  return (
    <div className={container}>
      <img className={notImg} src={notFound} alt='404' />
    </div>
  );
};

export default NotFound;
