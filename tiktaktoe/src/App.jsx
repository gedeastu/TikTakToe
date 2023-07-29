import './App.css'
import React, { useState } from 'react'
import Square from './component/square'
const App = () => {
  const [squares,setSquares] = useState(Array(9).fill(null));

  const [xIsNext,setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    {xIsNext ? (nextSquares[i] = 'X'):(nextSquares[i] = 'O')}
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status = '';
  winner ? status = 'Winner : ' + winner : status = 'Next Player : ' + (xIsNext ? 'X' : 'O');
  return (
    <>
    <div className='container max-w-full h-screen flex justify-center items-center'>
    <h1>{status}</h1>
    <article className='grid grid-cols-3'>
    <Square value={squares[0]} onSquareClicked={()=>handleClick(0)} />
    <Square value={squares[1]} onSquareClicked={()=>handleClick(1)}/>
    <Square value={squares[2]} onSquareClicked={()=>handleClick(2)}/>
    <Square value={squares[3]} onSquareClicked={()=>handleClick(3)}/>
    <Square value={squares[4]} onSquareClicked={()=>handleClick(4)}/>
    <Square value={squares[5]} onSquareClicked={()=>handleClick(5)}/>
    <Square value={squares[6]} onSquareClicked={()=>handleClick(6)}/>
    <Square value={squares[7]} onSquareClicked={()=>handleClick(7)}/>
    <Square value={squares[8]} onSquareClicked={()=>handleClick(8)}/>
    </article>
    </div>
    </>
  )
}
function calculateWinner(squares){
  const rules = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
  ];
  for(let i = 0; i < rules.length; i++){
    const a = lines[i][0];
    const b = lines[i][1];
    const c = lines[i][2];
    // const d = lines[i][3];
    // const e = lines[i][4];
    // const f = lines[i][5];
    // const g = lines[i][6];
    // const h = lines[i][7];
    // const i = lines[i][8];

    if(squares[a] && squares[a] === squares[b] && squares[c]){
      return squares[a];
    }
  }
  return false;
}
export default App;
