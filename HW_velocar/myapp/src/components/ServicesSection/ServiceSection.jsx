import React from 'react';
import s from './ServiceSection.module.css'

export default function ServiceSection({ key, title, color }) {
const itemStyle = {
    backgroundColor: color,
};

  return (
      <div className={s.wrapper} style={itemStyle}>
        <div className={s.decoration}></div>
        <h2 className={s.tytle} >{title}</h2>
      </div>
  );
}
