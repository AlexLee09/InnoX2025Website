import React from 'react'
import NavItems from './NavItems'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full border-b h-[72px]'>
        <div className='flex flex-row items-center justify-between px-40  h-full '>
            <Link href={"/"}>
                <h1 className='text-xl'>InnovationX</h1>
            </Link>
            <div className='wrapper flex items-center justify-between'>
                <NavItems>
                </NavItems>
            </div>
        </div>
    </header>
  )
}

export default Header