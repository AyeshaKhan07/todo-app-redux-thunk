import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ADD_TASK } from './store/action-type/task-types';

function App() {
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.tasks);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    dispatch({type: ADD_TASK, payload: newTask});
    setNewTask("");
  }

  function removeTask() {
    // code
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="add-task">
        <input value={newTask} type="text" id="taskInput" placeholder="Add a new task" onChange={e => setNewTask(e.target.value)} />
        <button id="addTask" onClick={addTask}>Add</button>
      </div>
      <ul id="taskList">
        {
          taskList.map((item, index) => {
            return <li key={index}>
              <p>{item}</p>
              <button className='delete-task' onClick={removeTask}>Remove</button>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
