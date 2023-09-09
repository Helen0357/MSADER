import Image from 'next/image'
import NavBar from './scenes/globals/NavBar'
import { Container } from '@mui/material'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Home() {
  return (
  <>
    <section className="landing pb-8 pt-6">
   <Container className='flex items-center justify-between'>
    <section className='land-pic relative'>
      <Image width={800} height={600} alt='' src='/assets/shape.svg' className='absolute z-1 top-32 left-20' />
      <Image width={500} height={500} alt='' src='/assets/girl.png' className='relative z-10 '  />
    </section>
    <section className=''>
      <h1 className='mb-4'>YOU DEMAND QUALITY, WE SUPPLY GROWTH</h1>
      <p className='mb-6 text-center lg:text-left'>We are focused on providing the best experience for you</p>
      <div className='landing-btn flex  flex-col-reverse lg:flex-row items-center gap-5'>
        <button className='more'>LEARN MORE</button>
     <div className='flex gap-7  lg:ml-4'>
     <span className='circle bg-white w-4 h-4 rounded-full block'></span>
      <span className='circle bg-white w-4 h-4 rounded-full block'></span>
     </div>
     
      </div>
    </section>
   </Container>
    </section>
    <section className='latest-news bg-white py-16'>
    <Container>
    <h1 className='text-4xl font-black mb-2 text-center lg:text-left'>LATEST NEWS</h1>
      <p className='font-meduim text-center lg:text-left'>Find The Latest Blogs News From Msader</p>
      <section className='cards-group flex items-center justify-between mt-10 gap-3 flex-wrap lg:flex-nowrap '>
        <div className='card'>
          <Image width={400} height={200} alt='' src='/assets/shutterstock_594753989.png' />
         <div className='c-content'>
         <span className='line'></span>

<span className='date '>16 Novamber,2022</span>
<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
<Link href='' className='shortflex '>READ MORE <ArrowRightAltIcon /></Link>
         </div>
        </div>
        <div className='card'>
          <Image width={400} height={200} alt='' src='/assets/shutterstock_609064469.png' />
          <div className='c-content'>
          <span className='line'></span>
          <span className='date '>16 Novamber,2022</span>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
          <Link href='' className='shortflex '>READ MORE <ArrowRightAltIcon /></Link>
          </div>
        </div>
        <div className='card'>
          <Image width={400} height={200} alt='' src='/assets/shutterstock_1746370334.png' />
          <div className='c-content'>
          <span className='line'></span>

          <span className='date '>16 Novamber,2022</span>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
          <Link href='' className='shortflex'>READ MORE <ArrowRightAltIcon /></Link>
          </div>
        </div>
      </section>
      <div className='read-more mt-16 lg:mt-24 flex flex-wrap gap-8 justify-center lg:justify-start lg:flex-nowrap items-center lg:gap-56'>
      <Image width={400} height={200} alt='' src='/assets/Group58.svg' />
      <Link href='' className='more'>READ MORE</Link>
      </div>

      <div className='request-demo flex items-center justify-center gap-6 lg:justify-start flex-wrap lg:flex-nowrap lg:gap-56'>
        <h2>YOUR ONCE STEP AWAY TO CAREER GROWTH</h2>
        <Link href='' className='bg-white py-3 px-7 text-md rounded-3xl'>REQUEST A DEMO</Link>
      </div>
    </Container>
       </section>
  </>
  )
}
