import React from 'react'

const LiveChat = ({name , message}) => {
  return (
    <div className='bg-slate-100 m-1 p-2 flex items-center rounded-lg'>
        <img className='w-8 h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'></img>
        <span className='font-bold mx-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveChat