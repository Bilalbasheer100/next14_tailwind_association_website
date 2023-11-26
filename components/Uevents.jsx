import Link from 'next/link'
import React from 'react'

const Uevents = ({name}) => {
  return (
    <div className='flex flex-col  '>
        <div className='pt-10 pl-10'>

    <h2 className='mt-10 text-4xl font-bold tracking-tight text-red-400 sm:text-6xl mb-10'> {name} Events</h2>
        </div>
    <div className='flex justify-around flex-wrap gap-5 cursor-pointer md:mx-1 mx-6'>
{
    name=='Upcoming'?(
        <Link href ='/score-board'> 
            <div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400 '>
      <h3>SPORTS</h3>
      <h3>26/11/2023</h3>
      </div>
      Excitement awaits as our college gears up for a thrilling sports event! Join us for a day filled with intense competition, camaraderie, and unforgettable moments that celebrate athleticism and teamwork.
{name=='Upcoming'?(
<h3 className='font-semibold text-green-500 flex mt-10 justify-end mr-10'>Live</h3>

):(
    <p></p>
)
}

 </div>  
             </Link>

      

    ):(
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400 '>
      <h3>SPORTS</h3>
      <h3>26/11/2023</h3>
      </div>
      Excitement awaits as our college gears up for a thrilling sports event! Join us for a day filled with intense competition, camaraderie, and unforgettable moments that celebrate athleticism and teamwork.
{name=='Upcoming'?(
<h3 className='font-semibold text-green-500 flex mt-10 justify-end mr-10'>Live</h3>
):(
    <p></p>
)
}

 </div>
    )
}
    

<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>ARTS</h3>
      <h3>14/12/2023</h3>
      </div>
      Prepare for an enchanting showcase of creativity at our upcoming arts event! Immerse yourself in a world of diverse talents, featuring captivating performances, stunning exhibits, and a celebration of artistic expression. </div>
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>TECH FEST</h3>
      <h3>22/12/2023</h3>
      </div>
      Gear up for an electrifying experience at our college's Techfest! Explore cutting-edge innovations, engage in tech talks, and witness thrilling competitions. A convergence of intellect, creativity, and futuristic technology awaits! </div>
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>HACKATHON</h3>
      <h3>12/01/2024</h3>
      </div>
      Embark on a coding adventure at our college's Hackathon! Join fellow innovators to tackle challenges, brainstorm solutions, and push the boundaries of technology. A high-energy coding marathon awaits you! </div>
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>MUSIC SHOW</h3>
      <h3>22/02/2024</h3>
      </div>
      Dive into a melodic extravaganza at our college's upcoming music event! Immerse yourself in soulful tunes, dynamic performances, and a vibrant celebration of musical talent that resonates across genres. </div>
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>COLLEGE DAY</h3>
      <h3>14/04/2024</h3>
      </div>
      Anticipation fills the air for our college day event! Join us for a day of festivities, awards, cultural showcases, and unity. A celebration that embodies the essence and achievements of our college community.</div>
  </div>
    </div>
 
  )
}

export default Uevents
