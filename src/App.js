
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Link,Route} from 'react-router-dom'
function App() {
  const[count,setCount]=useState(0)
  const [value,setValue]=useState(3)
  const [active,setActive]=useState(true)
  
  const a=[{'Tiny(3 x 3)':3},{'Classic(4 x 4)':4},{'Big(5 x 5)':5},{'Bigger(6 x 6)':6},{'Huge(8 x 8)':8}]
  const s=[]
  for(let i =0;i<value;i++){
    s.push(i)
  }
  let z=Object.keys(a[count])
  useEffect(()=>{
    let z=Object.values(a[count])
    setValue(z[0])
  },[count])
  return (<BrowserRouter>
    <div className="App">
      {active&&<div id='boxContainer'>
        <div id='box'>
          {s.map(()=>{
            return <div className="row">{s.map(()=>{
            return <div className='cell'>&nbsp;</div>
          })}</div>
          })}
        </div>
        <div id='footer'>
        <div id='options'><button disabled={count==0}  onClick={()=>
        setCount(count-1)}>{'<'}</button><span>{z[0]}</span><button disabled={count==4} onClick={()=>
        setCount(count+1)}>{'>'}</button></div> 
        <Link to="/home"><button onClick={()=>setActive(!active)}>Start Game</button></Link>
        </div></div>}
        {!active&&<Home value={value}/>}
        </div></BrowserRouter>
  );
}

export default App;
