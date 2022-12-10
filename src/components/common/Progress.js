import React from 'react';
import style from '../../../styles/progress.module.css';

const Progress = () => {
    return (
        <div className={style.demo_container}>
            <div className={style.progress_bar}>
                <div className={style.progress_bar_value}></div>
            </div>
        </div>
    );
};

export default Progress;