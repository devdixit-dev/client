import React from 'react';
import logo from '../public/todoapp.png'

const Navbar = ({count}) => {
  return (
    <div className='w-full m-auto flex p-6 justify-between items-center border-b-2'>
      <img src={logo} width={40} className='mr-2' draggable="false" />
      <h2 className='text-2xl'>To-do App</h2>
      <div className='flex m-auto items-center p-4 bg-white text-black mt-0'>{`Total Task : ${count}`}</div>
      <ul>
        <li>Exit</li>
      </ul>
    </div>
  );
};

export default Navbar;


