"use client"
import React from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'


const NavItems = () => {
  return (
    <div className="gap-16 flex flex-row items-center justify-center">
        {navLinks.map((navLink) => (
            
            // <Link href = {navLink.slug} key={navLink.name}>
            //     {navLink.name}
            // </Link>
            navLink.isComp? (
                    <NavigationMenu key={navLink.name}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    {navLink.name}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Link href={navLink.slug + "/info"} className="">
                                        Info
                                    </Link>
                                    <Link href={navLink.slug + "/register"} className="">
                                        Register
                                    </Link>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
            ) :
            (
                <Link href = {navLink.slug} key={navLink.name}>
                    <h1 className='text-xl px-4 '>{navLink.name}</h1>
                </Link>
            )
        ))}
    </div>
  )
}

export default NavItems