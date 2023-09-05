import React from 'react'
import Button from './Button'

const ButtonList = () => {

const arr = ["Search" , "TV" , "Games" , "Comedy" , "Drama" , "Fun" , "Movie" , "Dance" , "Cookiong" , "Coding" , "Bhakti" , "politics" , "Yoga" , "Study" , "External affairs" ]



  return (
    <div className='flex mx-2 w-full snap-x overflow-x-hidden'>
      { arr.map((item , index)=>{
        return<Button  name = {item} key={index} />
       })}
    </div>
  )
}

export default ButtonList