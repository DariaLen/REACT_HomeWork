import React, { useState } from 'react'
import s from './WeekofDay.module.css'

export default function WeekofDay() {

  const [isOpen, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };


  const handleButtonClick = () => {
    setOpen(!isOpen);
  };

  // function renderDay(arr) {
  //   return arr.map((day) => (
  //     <li className={s.menu_item} key={day} onClick={() => handleDayChange(day)}>
  //       {day}
  //     </li>
  //   ));
  // }

  function renderDay(arr) {
    return arr.map((day) => (

      <li
        className={s.menu_item} 
        key={day}
        onClick={() =>{
          handleDayChange(day)
        } }
      >
        {day}
      </li>
    ));
  }

  // function style(){
  //   if(isOpen){
  //    { display: 'block';}
  //   } else {
  //    { display: 'none';}
  //   }
  // }

  return (

      <div className={s.wrapper}>
        <p>Выберите день</p>
            <ul className={` ${isOpen ? s.active : ''} `} style={{ display: isOpen ? 'block' : 'none' }} >
               {renderDay(daysOfWeek)}
               
            </ul>
            <button className={s.btn_list} onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                 <rect width="19.9518" height="5.13047" transform="matrix(0.626509 0.779414 -0.626509 0.779414 3.21428 3.05176e-05)" fill="black"/>
                  <rect width="19.9518" height="5.13047" transform="matrix(0.626509 -0.779414 0.626509 0.779414 9.28572 15.5508)" fill="black"/>
           </svg>
            </button>
      </div>
  )
}


