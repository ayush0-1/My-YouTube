import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';

const VideoCont = () => {

  const [videos , setVideos]= useState([])

useEffect(()=>{getVideos()} , []);

async function getVideos(){
  const data = await fetch(YOUTUBE_VIDEOS_API);
  const json = await data.json();
  setVideos(json.items);
}

if(!videos.length)
return <Shimer/>

  return (
    <div className='ml-4 mx-4 flex   justify-between space-x-1 gap-y-8 flex-wrap snap-y'>
    {videos.map(video =>(
      <Link  key = {video.id}  to={"watch?v="+video.id}><VideoCard info = {video}/></Link>
    ))}      
    </div>
  )
}

export default VideoCont