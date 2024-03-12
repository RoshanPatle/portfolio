import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import graphql from '../assets/graphql.png'
import tailwind from '../assets/tailwind.png'


function Skills() {
    const skills=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        }, {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:github,
            title:'Github',
            style:'shadow-gray-500'
        }
    ]
    
  return (
    <div  name='skills' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white'>
        <div>
            <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Skills</p>
            <p className='py-6'>These are the techonologies I've worked with</p>
        </div>
        <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>

{
    skills.map(({id,src,title,style})=>(
         <div key={id} className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style} `}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
            </div>
    ))
}
            
           
            
        </div>
      </div>
    </div>
  )
}

export default Skills
