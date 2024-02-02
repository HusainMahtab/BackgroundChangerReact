import { useState } from 'react'
import './index.css'
import './App.css'


function App() {

  const [color,setColor]=useState("red")
 

  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
    <button className="bg-red-400 m-3" onClick={()=>setColor("red")}>Red</button>
    <button className="bg-blue-400 m-3" onClick={()=>setColor("blue")}>Blue</button>
    <button className="bg-yellow-400 m-3" onClick={()=>setColor("yellow")}>Yellow</button>
    <button className="bg-pink-400 m-3" onClick={()=>setColor("pink")}>Pink</button>
    <button className="bg-black-400 m-3" onClick={()=>setColor("black")}>Black</button>
    <button className="bg-gray-400 m-3" onClick={()=>setColor("gray")}>Gray</button>
    <button className="bg-orange-400 m-3" onClick={()=>setColor("orange")}>Orange</button>
    <button className="bg-purple-400 m-3" onClick={()=>setColor("purple")}>Purple</button></div>
   

</>
  )
}

export default App
