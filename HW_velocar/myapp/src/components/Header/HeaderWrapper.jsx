
import React from 'react'
import Header from './Header'
import style from './HeaderWrapper.module.css'

export default function HeaderWrapper() {
  return (
    <header className={style.header} >
        <Header/>
    </header>
  )
}

