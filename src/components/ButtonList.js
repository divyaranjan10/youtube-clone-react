import React from 'react';
import Button from './Button';

const ButtonList = () => {
  //Do map over it
  // const list =["All","Mixes","Live"];

  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Mixes"/>
      <Button name="Live"/>
      <Button name="Music"/>
      <Button name="Javascript"/>
      <Button name="Bollywood Music"/>
      <Button name="Recently Uploaded"/>
      <Button name="New to you"/>
    </div>
  )
}

export default ButtonList;