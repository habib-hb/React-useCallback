import React,{ useState , useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './list.jsx'


export default function App() {
 const [number, setNumber] = useState(1);
 const [dark, setDark] = useState(false);

 const getItems = useCallback( ()=>{
  return [number, number+1, number+2]
 }, [number])

 const theme= {
   backgroundColor: dark? '#333' : '#fff',
   color: dark? '#fff' : '#333',
 }




  return (
    <>
     <div style={theme}>
      <input type="number"
      value={number}
      style={theme}
      onChange={ e=> setNumber(parseInt(e.target.value))} />

      <button style={theme} onClick={()=> setDark(prev=> !prev)}>Toggle Theme</button>
      <List getItems= {getItems}/>
     </div>
    </>
  )
}


