import React from 'react'
import { useSelector } from 'react-redux'
// import store from '../utils/store'   
import { Link } from 'react-router-dom';

const SideBar = () => {

const isManueOpen = useSelector(store => store.app.isMenueOpen);

if(!isManueOpen)
return null;

  return (
    <div className='w-52 p-6 shadow-lg snap-y'>
        <ul className='my-2'>
            <li><Link to= "/">Home</Link></li>
            <li>Shorts</li>
            <li>videos</li>
            <li>Live</li>
        </ul>
        <hr></hr>
        <h1 className='font-bold '>Subscriptions</h1>
        <ul className='my-2'>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <hr></hr> <h1 className='font-bold '>Watch Later</h1>
        <ul className='my-2'>
        <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <hr></hr> <h1 className='font-bold '>Heading 1</h1>
        <ul className='my-2'>
            <li>List itm 1</li>
            <li>List itm 2</li>
            <li>List itm 3</li>
            <li>List itm 4</li>
        </ul>
        <hr></hr> <h1 className='font-bold '>Heading 2</h1>
        <ul className='my-2'>
            <li>List itm 1</li>
            <li>List itm 2</li>
            <li>List itm 3</li>
            <li>List itm 4</li>
        </ul>
        <hr></hr> <h1 className='font-bold '>Heading 3</h1>
        <ul className='my-2'>
            <li>List itm 1</li>
            <li>List itm 2</li>
            <li>List itm 3</li>
            <li>List itm 4</li>
        </ul>
        <hr></hr>
       
    </div>
  )
}

export default SideBar