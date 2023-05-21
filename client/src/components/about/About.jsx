import React from 'react';
import style from './About.module.css'

const { container, leyenda } = style;

const About = () => {
    return (
        <div className={container}>
            <h1 className={leyenda}>{'©2023 Jaime Baldomá'}</h1>
        </div>
    )
}

export default About;