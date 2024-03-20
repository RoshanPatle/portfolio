import React from 'react'
import project_1 from '../assets/project1.png'
import project_2 from '../assets/project2.png'
import project_3 from '../assets/project3.png'
import project_4 from '../assets/project4.png'

function Project() {

const projects=[
{
  id:1,
  src:project_1
},
{
  id:2,
  src:project_2
},
{
  id:3,
  src:project_3
},
{
  id:4,
  src:project_4
},  
]

  return (
    <div  name='portfolio' className='w-full text-white pb-44 bg-gradient-to-b from-black to-gray-800 md:h-screen'>
      <div  className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8'>
         <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Projects</p>
         <p className='py-6'>Check out some of my work right here</p>
        </div>
        
        <div className='grid gap-8 px-12 sm:grid-cols-2 sm:px-0'>
          {
            projects.map(({id , src})=>(
              <div key={id}   className='rounded-lg shadow-md shadow-gray-500'>
            <img src={src} alt="" className='duration-200 rounded-md hover:scale-105' />
            <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo </button>
                <button   className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            ))
          }
          
            
            
        </div>
      </div>
    </div>
  )
}

export default Project
