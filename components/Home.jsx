import computer from '@/public/assets/images/computer.png'
import Image from 'next/image'
const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function Home() {
    return (
     <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container' >
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
        
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold px-10'>
          <span className='text-white max-lg:text-5xl xl:bg-dark-1 xl:whitespace-nowrap relative z-10 pr-10'>
          Welcome to 
          </span>
          <br />
          <span className='mt-3 text-red-500'>Computer  </span>
          <div className='flex gap-4 sm:gap-8 '>

          <span className='mt-3 text-red-500'> Science </span>
          
          <Image src={computer} width={80} height={60} alt='computer'/> 
          </div>
          <span className="max-lg:text-6xl text-8xl text-white">
          Department Association
            </span>
        </h1>
        <div className="px-10">

        <h2 className='font-montserrat text-slate-gray text-xl leading-8 mt-6  sm:max-w-sm mb-2 text-red-400'>
        Ignite Your Passion for Sports & Games  <br/></h2>
        <h2 className='text-gray-300'> Join us in the thrilling journey of sports excellence! Explore upcoming events, relive past highlights, and get ready to be part of a community that celebrates the spirit of competition.


        </h2>
        </div>

      

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          
        </div>
      </div>
     </section>
    )
  }
  