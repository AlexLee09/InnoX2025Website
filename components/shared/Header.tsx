import React from 'react'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className='w-full border-b h-[64px]'>
        <div className='flex flex-row items-center justify-between px-40 bg-red-50 h-full '>
            <h1>InnovationX</h1>
            <div className='wrapper flex items-center justify-between'>
                <NavItems>
                </NavItems>
            </div>
        </div>
    </header>
  )
}

export default Header