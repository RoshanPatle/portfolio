import React from 'react'
import { FaGithub , FaLinkedin} from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";

function SocialLinks() {
const links=[
{
  id:1,
  child: <><p className='mr-8 text-xl'>Linkedin</p> <FaLinkedin  size={25}/></>,
  href:'https://www.linkedin.com/in/roshan-patle-013597265',
  
},

{
  id:2,
  child: <><p className='mr-12 text-xl'>Github</p> <FaGithub  size={25}/></>,
  href:'https://github.com/RoshanPatle',
  download:true,
},
{
  id:3,
  child: <><p className='mr-8 text-xl'>Resume</p> <BsFileEarmarkPerson size={25}/> </>,
  href:'/RoshanResume.pdf',
  download:true,
},

  
]


  
  return (
    <div className='fixed lg:flex flex-col top-[35%] left-0  hidden '>
  <ul>

{
links.map(({id,child , href , download})=>(

        <li  key={id} className='flex items-center justify-between w-40 px-4 bg-gray-500 h-14 ml-[-110px]  hover:ml-[-10px] duration-300 hover:rounded-md'>
            <a href={href} className='flex items-center justify-between text-white' target='_blank'>
            {child}
            </a>
        </li>
      
)) 
}
  </ul>  </div>
  )
}

export default SocialLinks
