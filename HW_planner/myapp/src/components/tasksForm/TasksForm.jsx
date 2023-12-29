import React from 'react'
import s from './TascForm.module.css'

export default function TasksForm({setDay,setImportance,setDescription,importance,description,day,addTask}) {


  return (
    <div className={s.wrapper}>
        <div className={s.todosItem}> 
            <label>
                <select  value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="Понедельник">Понедельник</option>
                    <option value="Вторник">Вторник</option>
                    <option value="Среда">Среда</option>
                    <option value="Четверг">Четверг</option>
                    <option value="Пятница">Пятница</option>
                    <option value="Суббота">Суббота</option>
                    <option value="Воскресенье">Воскресенье</option>
                </select>
            </label>

            <label>
                <select value={importance} onChange={(e) => setImportance(e.target.value)}>
                    <option value="Важно">Важно</option>
                    <option value="Не важно">Не важно</option>
                </select>
            </label>
        </div>

        <div className={s.addForm}>
            <label>
            <input
                placeholder='Описание '
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </label>
            <button onClick={addTask}>Добавить</button>
        </div>
       
    </div>
  
  )
}
