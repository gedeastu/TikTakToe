import React from 'react'
import { useState } from 'react'
const Square = ({value, onSquareClicked}) => {
  // const [X, setX] = useState(false)
  // const handleClickX = ()=>{
  //   setX(!X ? ('X') : (null))
  // }
  return (
    <>
    <button onClick={onSquareClicked} className='w-10 h-10 border border-black text-[1.2rem] font-semibold cursor-pointer'>
    {value}
    </button>
    </>
  )
}

export default Square;