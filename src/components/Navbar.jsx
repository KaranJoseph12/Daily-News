import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <main className='w-full py-4  border-2 bg-[#ed4a60] border-red-500 '>
      <nav className=" font-montserrat relative flex justify-around items-center font-bold text-white text-lg  ">
      <Link to="/business" className=''>Business</Link>
      <Link to="/entertainment" className='relative left-[-3%]'>Entertainment</Link>
      <Link to="/health" className='relative left-[-7%]'>Health</Link>
      <Link to="/general" className='absolute top-[-40%] left-[44%] text-4xl font-sans'>Daily News</Link>
      <Link to="/science" className='relative right-[-5%]'>Science</Link>
      <Link to="/sports" className='relative right-[-3%]'>Sports</Link>
      <Link to="/technology" className=''>Technology</Link>
      
      </nav>
    </main>
  )
}

export default Navbar