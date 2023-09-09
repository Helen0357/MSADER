import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

function Services() {
  return (
    <section className='services'>
   <Container className='flex items-center gap-10 cont justify-center flex-wrap lg:flex-nowrap lg:justify-start'>
   <div>
            <h2 className='text-4xl font-black mb-2 text-center lg:text-left'>SERVICES</h2>
            <p className=' w-full lg:w-72 mb-8 font-medium text-center lg:text-left'>We are focused on providing the best experience for you</p>
            <div className='relative'>
                <Image width={820} height={780} src='/assets/MaskGroup2.png' alt='' className='relative z-4' />
      <Image width={170} height={170} alt='' src='/assets/shape.svg' className='absolute z-1 ' />

            </div>

        </div>
        <div className='flex justify-between flex-col side' >
      <Image width={170} height={140} alt='' src='/assets/shape.svg' className='none lg:block' />
<div className='mt-10 lg:mt-0'>
<h4 className='font-extrabold mainGreen'>HR RECRUITING</h4>
<p className='lg:w-96 mb-4'>At Msader, we are proud to say that we do things differently. We are specialized in HR recruitment, handling the entire recruiting process from start to finish.</p>
<Link href='' style={{fontSize: '14px' , color: '#2F8E81'}} className='font-bold shortflex servLink'>READ MORE <ArrowRightAltIcon /></Link>
</div>
<div></div>
        </div>
   </Container>
    </section>
  )
}

export default Services