import React, { useState } from 'react';

const Switcher = ({ isChecked, onChange }) => {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={onChange}
        className='sr-only'
      />
      <span className='flex items-center text-sm font-medium text-black'>
        Light
      </span>
      <span
        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
          isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
        }`}
      >
        <span
          className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
            isChecked ? 'translate-x-[28px]' : ''
          }`}
        ></span>
      </span>
      <span className='flex items-center text-sm font-medium text-black'>
        Dark
      </span>
    </label>
  );
};

export default Switcher;
