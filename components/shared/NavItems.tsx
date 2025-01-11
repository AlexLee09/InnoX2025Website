import React from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'

const NavItems = () => {
  return (
    <div className="space-x-16">
        {navLinks.map((navLink) => (
            <Link href = {navLink.slug} key={navLink.name}>
                {navLink.name}
            </Link>
        ))}
    </div>
  )
}

export default NavItems