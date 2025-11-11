import './App.css'
import { useState } from 'react';

export function Square({value, onClick}) {
return (
  <button className="square" onClick={onClick}>
    {value}
  </button>
)
}


 

export default function Board() {
const [value, setValue] = useState(Array(9).fill(null));
const [xNext, setXNext] = useState(true);

function handleClick(i) {
  const nextValue = value.slice();
  if (nextValue[i]) return;
  if (xNext){
    nextValue[i] = 'X';
  }
  else{
    nextValue[i] = 'O';
  }

  setValue(nextValue);
  setXNext(!xNext)
}

 return (
   <div className="page">
     <div className="board">
       <Square value={value[0]} onClick={() => handleClick(0)} />
       <Square value={value[1]} onClick={() => handleClick(1)} />
       <Square value={value[2]} onClick={() => handleClick(2)} />
       <Square value={value[3]} onClick={() => handleClick(3)} />
       <Square value={value[4]} onClick={() => handleClick(4)} />
       <Square value={value[5]} onClick={() => handleClick(5)} />
       <Square value={value[6]} onClick={() => handleClick(6)} />
       <Square value={value[7]} onClick={() => handleClick(7)} />
       <Square value={value[8]} onClick={() => handleClick(8)} />
     </div>
   </div>
 )
 }


  

