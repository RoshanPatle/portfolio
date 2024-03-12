import React from 'react'

function Contact() {
  return (
    <div className='w-full h-screen p-4 text-white bg-gradient-to-b from-black to-gray-800'>
      <div className='flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8'>
            <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>contact</p>
            <p className='py-6'> Submit the form below to get in touch with me</p>
        </div>
        <div className='flex items-center justify-center'>
            <form action="" className='flex flex-col w-full space-y-4 md:w-1/2'>
<input type="text" name="name" className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none' placeholder='Enter your name'/>
<input type="text" name="email" className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none' placeholder='Enter your email'/>
<textarea name="message" rows="10"  className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none' placeholder='Enter your message'></textarea>
<button className='flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110'>let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
