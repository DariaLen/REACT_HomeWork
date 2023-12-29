import React from 'react'
import s from './RentalSection.module.css'

export default function RentalSection() {
  return (
    <div className={s.wrapper}>
        <img className={s.image} src='assets/linkedin.png' alt='byke_image'></img>
        <div className={s.text}>
            <p>Прокат велосипедов</p>
            <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. 
                Как раз мы находимся в прекрасном парке!
            </p>
        </div>

    </div>
  )
}
