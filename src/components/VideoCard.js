import React from 'react'

const VideoCard = ({info}) => {

    // console.log(info);
 const {snippet , statistics} = info;
 const { thumbnails , channelTitle , localized} = snippet;
 


  return (
    <div className=' w-96 justify-evenly bg-gray-100 rounded-lg shadow-lg'>
        <div className='rounded-lg'>
        <img className='rounded-t-lg w-96' alt='video' src={thumbnails?.maxres?.url}></img>
        </div>
        <div className='flex'>
            <div className=' m-1 p-1'>
                {/* <img className='w-10 h-10 rounded-full' alt='user' src='https://yt3.ggpht.com/3r1tD8EwV0NcpCRJaVVrpML1msRbOqIAJZlI0h2ypU0QjwkZZerS00FizIh8UToJiy-jUB4IGg=s68-c-k-c0x00ffffff-no-rj'></img> */}
            </div>
            <div>
                <h1 className='font-bold py-2'>{localized.title}</h1>
                <h2>{channelTitle}</h2>
                <h2>{statistics.viewCount / 1000}k Views</h2>
               
            </div>
        </div>
    </div>
  )  
}

export default VideoCard