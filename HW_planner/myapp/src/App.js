
import React, { useState } from 'react';
import './App.css';
import TasksForm from './components/tasksForm/TasksForm';


const App = () => {

  const [tasks, setTasks] = useState([]);
  const [day, setDay] = useState('Понедельник');
  const [importance, setImportance] = useState('Важно');
  const [description, setDescription] = useState('');


  const addTask = () => {
    if (description.trim() === '') {
      alert('Введите описание задачи.');
      return;
    }

    const newTask = {
      day,
      importance,
      description,
    };

    setTasks([...tasks, newTask]);
    setDescription('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const deleteDay = (selectedDay) => {
    const updatedTasks = tasks.filter((task) => task.day !== selectedDay);
    setTasks(updatedTasks);
  };

  const renderTasks = () => {
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница','Суббота','Воскресенье'];
    return daysOfWeek.map((day) => (
<div className='tasksForm'>
<div  key={day} 
      className='wrap'>
      <div className='h3'>
          <h3>{day}</h3>
      </div>

        <div className='task_wrap'>
        {tasks
          .filter((task) => task.day === day)
          .map((task, index) => (
            <div    
            className='tasks'>
            <p
              key={index}
              style={
                { backgroundColor: task.importance === 'Важно' ? 'red' : 'green' }
              
              } 
            >
              {task.description}
              <div 
              className='delete_btn'
                onClick={() => deleteTask(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="#E74C3C" stroke="black"/>
                    <rect x="8.5" y="7" width="17.6776" height="2.12131" transform="rotate(45 8.5 7)" fill="black"/>
                    <rect x="20.9999" y="8.5" width="17.6776" height="2.12131" transform="rotate(135 20.9999 8.5)" fill="black"/>
                </svg>
              </div>
            </p>
            </div>
          ))}
          </div>
        <div className='del_day' onClick={() => deleteDay(day)}>

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="#E74C3C" stroke="black"/>
            <rect x="8.5" y="7" width="17.6776" height="2.12131" transform="rotate(45 8.5 7)" fill="black"/>
            <rect x="20.9999" y="8.5" width="17.6776" height="2.12131" transform="rotate(135 20.9999 8.5)" fill="black"/>
        </svg>
        </div>
      </div>
</div>
    ));
  };

  return (
    <div className="App">
      <div>
        <TasksForm 
        setDay={setDay} 
        setImportance={setImportance}
        setDescription={setDescription}
        importance={importance}
        description={description}
        addTask={addTask}/>
        {/* <button onClick={addTask}>Добавить</button> */}
      </div>
      <div className='renderTask'>
        {renderTasks()}
      </div>
     
    </div>
  );
};

export default App;
