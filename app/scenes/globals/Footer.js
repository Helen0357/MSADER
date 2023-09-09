import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='footer pb-12'>
        <Container>
            <section className='flex gap-8 lg:gap-0 flex-wrap lg:flex-nowrap  justify-between py-20 '>
                <div>
                    <h4 className='font-bold mb-4'>MSADER</h4>
                    <ul>
                        <li><Link href='/aboutUs'>ABOUT US</Link></li>
                        <li><Link href='/services'>OUR SERVICES</Link></li>
                        <li><Link href='/whyUs'>WHY US</Link></li>
                        <li><Link href=''>CONTACT US</Link></li>
                        <li style={{color: '#2F8E81'}} className='mt-3 '><Link href='' className='font-bold'>REQUEST A DEMO</Link></li>
                    </ul>
                </div>
                <div>
                <h4 className='font-bold mb-4'>FOLLOW US</h4>
                <ul>
                        <li><Link href=''>FACEBOOK</Link></li>
                        <li><Link href=''>INSTAGRAM</Link></li>
                        <li><Link href=''>YOUTUBE</Link></li>
                        <li><Link href=''>TWITTER</Link></li>
                    </ul>
                </div>
                <div className='subscribe'>
                <h4 className='font-bold mb-4'>OUR NEWSLETTER</h4>
                <p className='mb-10'>If you want to know more and stay up to date , subscribe by verifying your email here</p>
                <div className='relative'>
                    <input placeholder='EMAIL' className='p-3  rounded-full w-100' />
                    <button>SUBSCRIBE</button>
                </div>
                </div>
            </section>
            <span className='mb-12'></span>
            <div className='end'>
                <Link href='' className='pr-3'>PRIVACY POLICY</Link> |
                <Link href='' className='pl-3 pr-3'>TERMS OF USE</Link> |
                <Link href='' className='pl-3'> &copy; MSADER</Link> 
            </div>
        </Container>
    </div>
  )
}

export default Footer