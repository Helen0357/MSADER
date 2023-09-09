import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
function WhyUs() {
  return (
    <div className='whyUs py-16 lg:py-20'>
      <Container>
        <section className='why-us gap-7 lg:gap-0 flex items-center justify-between flex-wrap lg:flex-nowarp'>
          <div className='text-center lg:text-left' >
            <h2 className='text-4xl lg:text-5xl text-white font-extrabold mb-2'>WHY US</h2>
            <p className='text-white lg:w-96' style={{fontWeight: '300' , fontSize: '18px'}}>They say choose wisely. that’s why we are here to be chosen</p>
          </div>
          <div className='flex items-center gap-6'>
            <Image src='/assets/ScrollGroup5.png' width={820} height={480} alt='' />
            <div className='text-white p-2 rounded-full cursor-pointer none lg:block' style={{border: '1px solid white'}}>
            <ArrowForwardIosIcon />
            </div>
          </div>
        </section>
        <section className='cr flex gap-5 justify-center lg:justify-start mt-7 lg:mt-0'>
          <span className='circle  w-5 h-5 rounded-full block ml-3' style={{backgroundColor: '#FFBC05'}}></span>
          <span className='circle w-5 h-5 rounded-full block' style={{backgroundColor: '#FFBC05'}}></span>
        </section>
        <section className='read-more mt-24 flex flex-wrap justify-center gap-8  lg:justify-start lg:flex-nowrap items-center lg:gap-56'>
        <Image width={400} height={200} alt='' src='/assets/Group57.svg' />
      <Link href='' className='cursor-pointer more'>LEARN MORE</Link>
        </section>
      </Container>
    </div>
  )
}

export default WhyUs