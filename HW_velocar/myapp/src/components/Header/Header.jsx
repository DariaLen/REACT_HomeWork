import React from 'react'
import style from './Header.module.css'
import HeaderContent from '../HeaderContent/HeaderContent'


export default function Header() {
 
  return (
    <div>
        <div className={style.header}>
            <img src='assets/logo.svg' alt='logo'></img>

            <ul className={style.ul_list}>
                <li>О нас</li>
                <li>Услуги</li>
                <li>Аренда</li>
            </ul>
            <button className={style.button}><link rel="stylesheet" href="#"/>Связаться</button>
        </div>
        <HeaderContent/>
    </div>
  )
}
