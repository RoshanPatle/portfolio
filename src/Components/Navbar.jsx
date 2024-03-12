<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap')
</style>


import { useState } from "react";
import React  from 'react'
import { FaBars  , FaTimes } from "react-icons/fa";


function Navbar() {
const [nav , setNav]=useState(false)

  
const links=[
  {
    id:1,
    link:'home'
  }
,
  {
    id:2,
    link:'about'
  },
   {
    id:3,
    link:'portfolio'
  } ,
  {
    id:4,
    link:'Experties'
  },
  {
    id:5,
    link:'contact'
  }
]

  
  return (
    <div className='fixed z-10 flex items-center justify-between w-full h-20 p-4 text-white bg-black'>
      <div>
        <h1 className='ml-2 text-2xl header md:text-5xl'>Roshan Patle</h1>
      </div>
      <ul className='hidden md:flex '> 
      { links.map(({id , link})=>(
        <li  key={id} className='px-4 text-gray-500 capitalize duration-200 cursor-pointer hover:scale-110'>
        {link}
          </li>
        
      )) }
      </ul>
<div  onClick={()=>setNav(!nav)} className='z-10 pr-4 text-gray-500 cursor-pointer md:hidden'>
      {nav?<FaTimes size={30}/>:<FaBars size={30} />}
      </div>

{
  nav&&
<ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
      
{ links.map(({id , link})=>(
        <li  key={id} className='px-4 py-6 text-4xl capitalize cursor-pointer'>
          {link}
        </li>
      )) }      
</ul>

}









    </div>
  )
}

export default Navbar
