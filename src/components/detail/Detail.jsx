import React from 'react';
import style from './Detail.module.css'

const { container, leyenda } = style;

const Detail = () => {
    return (
        <div className={container} >
            <h1 className={leyenda} >{'SOY EL DETAIL'}</h1>
        </div>
    )
}

export default Detail;