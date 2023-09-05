import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenue } from '../utils/appSlice';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchslice';
import { setKeyword } from '../utils/searchKeywordSlice';
import {Link} from "react-router-dom"

const Haed = () => {

  const dispatch = useDispatch();

  const [searchQuery , setSearchQuery] = useState("");
  const [suggestions , setSuggestions] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);


  const searchCache = useSelector(store => store.search);
  // const keyWordData = useSelector(store => store.searchKeyword.keyword)



  useEffect(()=>{
    setShowSuggestions(true);
   
    if(searchCache[searchQuery])
    {
      setSuggestions(searchCache[searchQuery]);
    }
    else
    {
       const timer = setTimeout(()=>getSearchSuggestions() , 300);
      return ()=>{
        clearTimeout(timer);
      }
    }
  } , [searchQuery]);

  const getSearchSuggestions = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))

  }

  // useEffect(()=>{
  //   setSearchQuery(keyWordData)
  // } , [keyWordData])

  useEffect(()=>{
   window.addEventListener('scroll' , handleScroll);

   return ()=>{
    window.removeEventListener('scroll' , handleScroll);
   }
  } , [])

  const handleScroll = ()=>{
     setShowSuggestions(false);
  }

const toggleMenueHandler = ()=>{
      dispatch(toggleMenue());
}



  return (
    <div className='flex justify-between shadow-lg '>
      <div className=' flex w-28 h-16 '>
        <img onClick={()=>toggleMenueHandler()} className='cursor-pointer' alt='hamberger' src='https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg'></img>
        <img alt='youTube logo' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'></img>
      </div>

    <div className='flex h-16 w-1/2 mt-4' >
      <input 
      value={searchQuery}
      onChange={(e)=> setSearchQuery(e.target.value)}
      type='text'
      placeholder='Search' 
      className=' pl-5  h-10 w-96  border-2 border-gray-400 rounded-l-full '
      onFocus={()=>{setShowSuggestions(true)}}
      onBlur={()=>{setTimeout(()=>{setShowSuggestions(false)} , 500)}}
       ></input>

<Link to={"search?s="+searchQuery}>
<button className='w-10 h-10  bg-gray-200 border-2 border-gray-400 rounded-r-full border-l-0'><img className='h-6 mx-auto'  src='https://cdn-icons-png.flaticon.com/512/954/954591.png' alt='search'></img></button>
</Link>

{/* <Link to="/search?s=">akak</Link> */}
{/* <Link to={"/"}><h1>ghshs</h1></Link> */}


      <button className='w-10 h-10  bg-gray-200 border-2 border-gray-400 rounded-full ml-2'><img className='h-6 mx-auto'  src='https://cdn-icons-png.flaticon.com/512/1082/1082810.png' alt='search'></img></button>
     



{ (showSuggestions && suggestions.length) ? (
  <div className='fixed bg-gray-100 ml-4 mt-10 p-2 w-[23rem] rounded-lg shadow-lg border border-gray-400'>
    <div>
      { suggestions.map((suggestion, index) => (
        <div
          key={suggestion} 
          className='p-1 shadow-sm hover:bg-gray-200'
          onClick={()=>{
                // dispatch(setKeyword(suggestion)); 
                setSearchQuery(suggestion)
              
            }}
        >{suggestion}</div>
      ))}
    </div>
  </div>
) : null }


    </div>
    

<div className='w-14 m-2 p-2'>
  <img alt='user' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'></img>
</div>

    </div>
  )
}

export default Haed