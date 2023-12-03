import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //it's called an early return, because if isMenuOpen is true it will go to the JSX code, if it is false, it will make an early return
  //and won't go to the JSX code
  if(!isMenuOpen){
    return null;
  }

  return (
    <div className='p-5 shadow-2xl h-[100vh] w-48 fixed top-16 bg-white'>
      <ul className='leading-7'>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Originals</li>
        <li>Youtube Music</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul className='leading-7'>
        <li>RoadsideCoder</li>
        <li>JsCafe</li>
        <li>Kevin Powell</li>
        <li>Akshay Saini</li>
        <li>Round Robin</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Movies</li>
        <li>Music</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default Sidebar;