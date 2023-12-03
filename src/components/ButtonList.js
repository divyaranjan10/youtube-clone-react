import React from 'react';
import Button from './Button';

const ButtonList = () => {
  // Do map over it
  // const list =[{id:1, "All"},{id:2, "All"},{id:3, "All"}];

  return (
    <div className='flex flex-wrap justify-center m-3 gap-4 max-w-[100vw]'>
      <Button name="All"/>
      <Button name="Mixes"/>
      <Button name="Live"/>
      <Button name="Music"/>
      <Button name="Javascript"/>
      <Button name="Bollywood"/>
      <Button name="Music"/>
      <Button name="Dance"/>
    </div>
  )
}

export default ButtonList;