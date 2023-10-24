import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import taskActions from './store/actions/task-actions';

function App() {
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.tasks);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    dispatch(taskActions.addTask({title: newTask}));
    setNewTask("");
  }

  function removeTask() {
    // code
  }

  useEffect(() => {
    dispatch(taskActions.getTaskList());
  }, [])

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="add-task">
        <input value={newTask} type="text" id="taskInput" placeholder="Add a new task" onChange={e => setNewTask(e.target.value)} />
        <button id="addTask" onClick={addTask}>Add</button>
      </div>
      <ul id="taskList">
        {
          taskList && taskList.map((item, index) => {
            return <li key={item.id}>
              <p>{item.title}</p>
              <button className='delete-task' onClick={removeTask}>Remove</button>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
