import React from 'react'
import { useState } from 'react'
const Square = () => {
  const [X, setX] = useState(false)
  const handleClickX = ()=>{
    setX(!X ? ('X') : (null))
  }
  return (
    <>
    <button onClick={handleClickX} className='w-10 h-10 border border-black text-[1.2rem] font-semibold cursor-pointer'>
    {X}
    </button>
    </>
  )
}

export default Square;