'use client';
import {  Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
function NavBar() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className=" flex flex-col lg:flex-row lg:items-center gap-8 items-center pt-6 lg:pt-0 ">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link href="/aboutUs" className="flex items-center">
          ABOUT US
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link href="/services" className="flex items-center">
          OUR SERVICES
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link href="/whyUs" className="flex items-center">
          WHY US
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link href="#" className="flex items-center">
          CONTACT US
        </Link>
      </Typography>
      <Typography  as="li"
        variant="small"
        className="font-normal" >
      <Button className='text-white px-5 font-medium rounded-full' >REQUEST A DEMO  </Button>

      </Typography>

    </ul>
  );
  return (
    <section className='navbar py-3'>  
  <Navbar className="  text-white">
      <Container className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          className=" cursor-pointer font-medium"
        >
         <Image width={103} height={40} alt='' src='/assets/logo.svg' />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton style={{top: '-10px' , right: '20px'}}
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </Container>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
    {/* <Container className='flex items-center justify-between py-3'>
    <Link href='/' className='logo'>
    <Image width={103} height={40} alt='' src='/assets/logo.svg' />
</Link>
<ul className='flex items-center gap-7 nav-items'>
    <li><Link href='/aboutUs'>ABOUT US</Link></li>
    <li><Link href='/services'>OUR SERVICES</Link></li>
    <li><Link href='/whyUs'>WHY US</Link></li>
    <li><Link href=''>CONTACT US</Link></li>
    <li><Button className='text-white px-5 font-medium rounded-full' >REQUEST Link DEMO  </Button></li>
</ul>
    </Container> */}
      </section>
  )
}

export default NavBar