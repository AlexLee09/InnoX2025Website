import React from 'react'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className='w-full border-b h-[64px]'>
        <div className='wrapper flex items-center justify-between'>
            <NavItems>
            </NavItems>
        </div>
    </header>
  )
}

export default Header