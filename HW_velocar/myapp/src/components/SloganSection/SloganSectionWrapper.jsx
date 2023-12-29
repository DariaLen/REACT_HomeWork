import React from 'react'
import SloganSection from './SloganSection'
import s from './SloganSectionWrapper.module.css'

export default function SloganSectionWrapper() {
  return (
    <div className={s.wrapper}>
        <SloganSection/>
    </div>
  )
}
