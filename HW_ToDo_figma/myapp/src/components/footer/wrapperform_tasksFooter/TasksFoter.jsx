import React, { useState } from 'react'
import WeekofDay from '../weekofDay/WeekofDay'
import Importance from '../importance/Importance'
import Description from '../description/Description'
import style from './TasksFoter.module.css'

export default function TasksFoter({addTask}) {

  const [userInput, setUserInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  return (
    <form onSubmit={handleSubmit} handleSubmit={handleSubmit}>
        <div className={style.wrapper}>
            <div className={style.wrapper__list_option}>
                <WeekofDay/>
                <Importance/>
            </div>
            <div >
                <Description/>
            </div>
        </div>
   </form>

  )
}
