import React from 'react';
import removeIcon from './assets/remove.png';

const Task = ({ task, deleteTask }) => {
  return (
    <div className='flex w-[90%] m-auto gap-6'>
      <div className='flex min-w-[300px] bg-white text-black m-4 py-2 px-4 ml-8 rounded-lg justify-between'>
        <div>
          <h2 className='text-xl'>{task.title}</h2>
          <p className='text-sm'>{task.desc}</p>
        </div>
        <button onClick={() => deleteTask(task.id)} className='px-2 rounded-lg cursor-pointer'>
          <img src={removeIcon} width={30} />
        </button>
      </div>
    </div>
  );
};

export default Task;