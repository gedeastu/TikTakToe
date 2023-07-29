import './App.css'
import React from 'react'
import Square from './component/square'
const App = () => {
  return (
    <>
    <div className='container max-w-full h-screen flex justify-center items-center'>
    <article className='grid grid-cols-3'>
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    </article>
    </div>
    </>
  )
}
export default App;
