import React from 'react'
import style from './HeaderContent.module.css'

export default function HeaderContent() {
  return (
    <div className={style.content}>
        <div className={style.content_wrap}>
            <h1 className={style.head}>Веломастерская “Велозар”</h1>
            <p className={style.head_text}>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, 
                которые смогли превратить свое увлечение и хобби в профессию. 
                Мы сами любим кататься и хотим чтобы Ваш двухколесный друг
                 приносил Вам только радость и удовольствие от езды.
            </p>
        </div>
        <div className={style.image}><img  src="assets/dino1.png" alt="dino_image" /></div>
    </div>
  )
}
