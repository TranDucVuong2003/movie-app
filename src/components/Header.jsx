import React from 'react'

export default function Header() {
  return (
    <div className=' p-4 bg-black'>
      <div className='container flex'>
        <div className='container flex items-center gap-8'>
          <h1 className='text-[30px] uppercase font-bold text text-red-700'>Movie</h1>
          <nav className='flex items-center space-x-4'>
            <a href="#" className='text-white'>Home</a>
            <a href="#" className='text-white'>About</a>
            <a href="#" className='text-white'>Contact</a>
          </nav>
        </div>
  
        <div className='space-x-4 hidden lg:flex'>
          <input type="text" placeholder='Search' className='p-2 text-black rounded-lg '/>
          <button className='p-2 bg-red-600 rounded-lg'>Search</button>
        </div>
      </div>
    </div>
  )
}
