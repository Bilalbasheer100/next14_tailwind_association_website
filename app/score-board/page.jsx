import { ScoreBoard} from '@/components/Table'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex justify-center '>
          <h2 className="text-4xl font-bold tracking-tight text-red-400 sm:text-6xl mt-20">Score Board</h2>
    </div>
    <div className='mt-[60px] md:mx-[200px] mx-5'>
<ScoreBoard/>
    </div>
    </>
  )
}

export default page
