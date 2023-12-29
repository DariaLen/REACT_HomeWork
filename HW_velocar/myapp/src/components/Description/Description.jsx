import React from 'react'
import style from './Description.module.css'

export default function Description() {
  return (
    <div className={style.content}>
        <div className={style.info_content}>
                <h2 className={style.head}>Что мы предлагаем</h2>
                <p className={style.text_style}>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда,
                    ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО 
                    велосипеда помогает избежать многих проблем и дорогого ремонта.  
                    Все работы выполняем качественно и с душой. 
                </p>
        </div>
        <img className={style.image} src='assets/byke_image.png' alt='image_byke'></img>
    </div>
  )
}
