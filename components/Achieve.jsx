import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import sports from '@/public/assets/images/sport.jpeg'
  import arts from '@/public/assets/images/arts.png'
  import onam from '@/public/assets/images/onam2.jpeg'
  import Image from 'next/image'

const Achieve = () => {
  return (
    <>
     <div className='flex  md:flex-row flex-col max-w-8xl flex-wrap ml-10 justify-around '>

<div className=' bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard >
<HoverCardTrigger>
<Image className='rounded-2xl' src={sports} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
    In 2023,CSE got 1st position in Sports.

</HoverCardContent>
</HoverCard>
</div> 
<div className='bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard >
<HoverCardTrigger>
<Image className='rounded-2xl' src={onam} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
In 2023,CSE got 2nd position in Onam Activities.
</HoverCardContent>
</HoverCard>
</div> 
<div className='bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard >
<HoverCardTrigger>
<Image className='rounded-2xl' src={arts} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
In 2023,CSE got 1st position in Arts.
</HoverCardContent>
</HoverCard>
</div> 
<div className='bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard>
<HoverCardTrigger>
<Image className='rounded-2xl' src={sports} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
In 2022,CSE got 2nd position in Sports.
</HoverCardContent>
</HoverCard>
</div> 
<div className='bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard >
<HoverCardTrigger>
<Image className='rounded-2xl' src={onam} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
In 2022,CSE got 1st position in Onam Activities.
</HoverCardContent>
</HoverCard>
</div> 
<div className='bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard >
<HoverCardTrigger>
<Image className='rounded-2xl' src={arts} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
In 2022,CSE got 1st position in Arts.
</HoverCardContent>
</HoverCard>
</div> 
 <div className='bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard >
<HoverCardTrigger>
<Image className='rounded-2xl' src={sports} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
In 2021,CSE got 3rd position in Sports.
</HoverCardContent>
</HoverCard>
</div> 
<div className='bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard >
<HoverCardTrigger>
<Image className='rounded-2xl' src={onam} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
In 2021,CSE got 1st position in Onam Activities.
</HoverCardContent>
</HoverCard>
</div> 
<div className='bg-zinc-900 w-[300px] h-[300px] md:my-20  md:mx-10 my-10 cursor-pointer hover:scale-110 transition ease-in-out' >
<HoverCard >
<HoverCardTrigger>
<Image className='rounded-2xl' src={arts} width={300} height={300}/>
</HoverCardTrigger>
<HoverCardContent>
In 2021,CSE got 1st position in arts.
</HoverCardContent>
</HoverCard>
</div> 

</div>
    </>
  )
}

export default Achieve
