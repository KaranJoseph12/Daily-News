import React from 'react'

const Navbar = () => {
  return (
    <main className='w-full py-4  border-2 bg-[#ed4a60] border-red-500 '>
      <nav className='font-montserrat relative flex justify-around items-center font-bold text-white text-lg'>
      <a href="" className=''>Business</a>
      <a href="" className='relative left-[-3%]'>Entertainment</a>
      <a href="" className='relative left-[-7%]'>Health</a>
      <a href="" className='absolute top-[-40%] left-[44%] text-4xl font-sans'>Daily News</a>
      <a href="" className='relative right-[-5%]'>Science</a>
      <a href="" className='relative right-[-3%]'>Sports</a>
      <a href="" className=''>Technology</a>
      
      </nav>
    </main>
  )
}

export default Navbar