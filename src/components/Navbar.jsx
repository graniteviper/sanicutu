import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
  return (
    <header className='m-4 p-2'>
        <nav className='flex justify-around items-center'>
            <img className='h-10 w-10' src={appleImg} alt="Apple" />
            <div className='flex gap-7 max-sm:hidden'>
              {navLists.map((nav,i)=>(
                <div key = {i} className='cursor-pointer text-gray hover:text-white transition-all'>
                  {nav}
                </div>
              ))}
            </div>

            <div className='flex gap-7'>
              <img className='h-5 w-5 cursor-pointer' src={searchImg} alt="" />
              <img className='h-5 w-5 cursor-pointer' src={bagImg} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar


// (x,y)=>()