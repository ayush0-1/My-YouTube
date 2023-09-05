import React from 'react'

const Shimer = () => {

    const emptyArr = new Array(9).fill(undefined);

  return (
    <div className='ml-4 flex mx-4 justify-between space-x-1 gap-y-8 flex-wrap'>
    {emptyArr.map((e , i)=>  <div key = {i} className='w-96 h-60 bg-slate-200 flex rounded-lg'></div>
)}
    </div>
  )
}

export default Shimer