import regal from "@/public/assets/images/champ4.jpeg"


import Image from "next/image"



export default function Team() {
  return (
  //   <div className="bg-dark-2 py-24 sm:py-32">
  //     <div className="flex justify-around max-md:flex-col">
  //       <div className="w-[700px] max-md:px-10 max-md:flex-wrap">
  //         <h2 className="text-3xl font-bold tracking-tight text-white-100 sm:text-4xl text-white">Meet our <span className="text-red-400">Team</span> </h2>
  //         <p className="mt-6 text-lg leading-8 text-gray-600 ">

  //         At CSE Department Association, our source of pride lies in the dedication and passion of our team. Each member brings distinctive talents and skills, uniting in a collaborative effort to craft a rewarding sports and games experience for our community. With a shared commitment to excellence, our team strives to foster a vibrant and inclusive environment. Through the collective synergy of our members, we aim to not only organize successful events but also to nurture a sense of camaraderie and sportsmanship among participants. The diverse expertise within our team allows us to create a well-rounded and engaging experience, ensuring that every individual, regardless of skill level, finds a place to thrive and contribute. Together, we are driven by the belief that sports go beyond competition—they build connections, instill values, and leave a lasting impact on the fabric of our CSE Department community.          </p>
  //       </div>
  //       <div className="bg-white h-[440px] w-[440px] flex items-center justify-center max-md:mt-10 max-md:mx-10">
  //         <Image src={regal} width={400} height={400}/>
  //       </div>
  //     </div>
  //   </div>



  <div className="relative isolate overflow-hidden py-24 sm:py-32">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">


      <h2 className="text-3xl font-bold tracking-tight text-white-100 sm:text-4xl text-white ">Meet our <span className="text-red-400">Team</span> </h2>
   <div className="flex lg:flex-row flex-col-reverse justify-around mt-5  ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          
          <p className="mt-6 text-lg leading-8 text-gray-300 ">
          At CSE Department Association, our source of pride lies in the dedication and passion of our team. Each member brings distinctive talents and skills, uniting in a collaborative effort to craft a rewarding sports and games experience for our community. With a shared commitment to excellence, our team strives to foster a vibrant and inclusive environment. Through the collective synergy of our members, we aim to not only organize successful events but also to nurture a sense of camaraderie and sportsmanship among participants. The diverse expertise within our team allows us to create a well-rounded and engaging experience, ensuring that every individual, regardless of skill level, finds a place to thrive and contribute. Together, we are driven by the belief that sports go beyond competition—they build connections, instill values, and leave a lasting impact on the fabric of our CSE Department community.          </p>

          
        </div>
        
        {/* <div className="bg-white h-[440px] w-[440px] flex items-center justify-center max-md:mt-10 max-md:mx-10">
           <Image src={regal} width={400} height={400}/>
        </div> */}
        <div className="h-[270px] w-[270px] flex items-center  justify-center m-10 max-sm:m-5 mt-20 bg-zinc-800 ">

        <Image src={regal} width={250} height={250}/>
        </div>
        

        </div>

       
      </div>
    </div>

  
  )
}
