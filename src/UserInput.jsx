import React, { useState } from 'react'
import addIcon from './assets/add.png'

const UserInput = ({ addTask, count }) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [emptyMessage, setEmptyMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return setEmptyMessage(true);
    setEmptyMessage(false);

    const newTask = { id: Date.now(), title, desc};
    addTask(newTask);

    setTitle("");
    setDesc("");
  };



  return (
    <div className="flex justify-center flex-col">
      {emptyMessage
        ? <p className='text-red-600 m-auto mt-4'>both fields are mandatory !!</p>
        : null
      }
      <div className="w-[50%] bg-white text-black m-auto mt-4 p-4 rounded-sm">
        <form className="flex items-center gap-4" onSubmit={handleSubmit}>
          <label htmlFor="title">Title<span className='text-red-600'>*</span></label>
          <input
            type="text"
            placeholder="Task Title"
            className="p-3 border-1 outline-none rounded-lg w-full"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="desc">Description<span className='text-red-600'>*</span></label>
          <input
            type="text"
            placeholder="Task Description"
            className="p-3 border-1 outline-none rounded-lg w-full"
            name="desc"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button type='submit' className='cursor-pointer'><img src={addIcon} className='w-[110px]' /></button>
        </form>
      </div>
    </div>
  )
}

export default UserInput
