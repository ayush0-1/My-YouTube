import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideBar} from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContiainer from './CommentsContiainer';
import ChatMessages from './ChatMessages';

const WatchPage = () => {
useEffect(()=>{ dispatch(closeSideBar());} , []);
const dispatch = useDispatch();

const [searchParams] = useSearchParams();

// console.log(searchParams.get("v"));
  return (
    <div >
    <div className='p-4 flex'>
      <iframe 
      width="1100" 
      height="500" 
      src={"https://www.youtube.com/embed/"+searchParams.get("v")}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullscreen>
      </iframe>
      <ChatMessages/>
    </div>
    <CommentsContiainer/>
    </div>
  )
}

export default WatchPage