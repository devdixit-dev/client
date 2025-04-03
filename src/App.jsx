import React, { useState } from 'react';
import Navbar from './Navbar';
import UserInput from './UserInput';
import TaskList from './TaskList';

const App = () => {
  const [mainTask, setMainTask] = useState([]);
  const [count, setCount] = useState(0);

  const addTask = (newTask) => {
    setMainTask([...mainTask, newTask]);
    setCount(mainTask.length + 1)
  };

  const deleteTask = (id) => {
    setMainTask(mainTask.filter((task) => task.id !== id));
    setCount(mainTask.length - 1)
  };

  return (
    <div>
      <Navbar count={count} />
      <UserInput addTask={addTask} />
      <TaskList tasks={mainTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
