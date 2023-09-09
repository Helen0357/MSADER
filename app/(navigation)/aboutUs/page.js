import { Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutUs() {
  return (
    <div className='aboutUs pt-16 lg:pt-24 pb-16'>
      <Container>
        <section className='text-center mb-14'>
        <h2 className='text-2xl'>WE ARE HERE TO<span className='font-black'> ELEVATE YOUR BUSINESS</span> TO THE ULTIMATE LEVEL OF GROWTH</h2>
        <p className='mt-3 lg:mt-0'>At Msader we provide all kind of HR services, we are responsible for all things workforce and talent-related.</p>
        </section>
        <section className='flex flex-wrap gap-5 lg:gap-0 lg:flex-nowrap'>
          <div className='flex items-center gap-6'>
          <Image width={60} height={60} src='/assets/one.svg' alt='' />
          <div>
            <h4>OUR MISSION</h4>
            <p>We aim to always fulfil our customer's expextations and needs by providing them with a world-class HR services</p>
          </div>

          </div>
          <div className='flex items-center gap-6'>
          <Image width={60} height={60} src='/assets/two.svg' alt='' />
          <div>
            <h4>OUR VISION</h4>
            <p>We are hard at work in the aim to become the leading HR network in USA</p>
          </div>

          </div>
        </section>
        <section>
        <div className='read-more mt-24 flex flex-wrap justify-center gap-8  lg:justify-start lg:flex-nowrap items-center lg:gap-56'>
      <Image width={400} height={200} alt='' src='/assets/Group58.svg' />
      <Link href='' className='more'>ABOUT US</Link>
      </div>
        </section>
      </Container>
    </div>
  )
}

export default AboutUs