import React from 'react';

const Input = ({ text, name, placeholder, type }) => {
  return (
    <label htmlFor={name} className='flex flex-col'>
      <span>{text}</span>
      <input name={name} placeholder={placeholder} type={type} />
    </label>
  );
};

export default Input;
