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
      <h3>NOV 26</h3>
      </div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam alias veritatis delectus rerum a itaque aliquid ad ex nulla! 
Laborum deserunt id ducimus voluptas eveniet vero pariatur qui ab!
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
      <h3>NOV 26</h3>
      </div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam alias veritatis delectus rerum a itaque aliquid ad ex nulla! 
Laborum deserunt id ducimus voluptas eveniet vero pariatur qui ab!
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
      <h3>SPORTS</h3>
      <h3>NOV 26</h3>
      </div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam alias veritatis delectus rerum a itaque aliquid ad ex nulla! 
Laborum deserunt id ducimus voluptas eveniet vero pariatur qui ab! </div>
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>SPORTS</h3>
      <h3>NOV 26</h3>
      </div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam alias veritatis delectus rerum a itaque aliquid ad ex nulla! 
Laborum deserunt id ducimus voluptas eveniet vero pariatur qui ab! </div>
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>SPORTS</h3>
      <h3>NOV 26</h3>
      </div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam alias veritatis delectus rerum a itaque aliquid ad ex nulla! 
Laborum deserunt id ducimus voluptas eveniet vero pariatur qui ab! </div>
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>SPORTS</h3>
      <h3>NOV 26</h3>
      </div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam alias veritatis delectus rerum a itaque aliquid ad ex nulla! 
Laborum deserunt id ducimus voluptas eveniet vero pariatur qui ab! </div>
<div className='flex max-w-sm h-[300px] rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white  flex-col p-5'>
    <div className='flex justify-between m-5 font-bold text-red-400'>
      <h3>SPORTS</h3>
      <h3>NOV 26</h3>
      </div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam alias veritatis delectus rerum a itaque aliquid ad ex nulla! 
Laborum deserunt id ducimus voluptas eveniet vero pariatur qui ab! </div>
  </div>
    </div>
 
  )
}

export default Uevents
