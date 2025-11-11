import './App.css'
import { useState } from 'react';

 export function Square() {
const [value, setValue] = useState(null);

function handleClick() {
  setValue('X');
}

 return (
   <button className="square" onClick={handleClick}>{value}</button>
 )
 }
 

 export default function Board() {

 return (
   <div className="page">
     <div className="board">
       <Square/>
       <Square/>
       <Square/>
       <Square/>
       <Square/>
       <Square/>
       <Square/>
       <Square/>
       <Square/>
     </div>
   </div>
 )
 }

  

