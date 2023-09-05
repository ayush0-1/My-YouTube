import React from 'react'

const Button = ({name }) => {
  return (
    <div>
        <button className='bg-slate-200 m-2 p-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button