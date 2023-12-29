import React, { useState } from 'react'
import s from './Description.module.css'

export default function Description({handleSubmit}) {

  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleKeyPress = (e) => {
    // e.preventDefault()
    if(e.key === 'Enter'){
      handleSubmit(e)
    }
  }
  return (
    <div className={s.wrapper}>
        <input 
        placeholder='Description' 
        type='text' 
        onChange={handleChange}
        onKeyDown={handleKeyPress}

        />
       <button>Добавить</button>
    </div>
  )
}
