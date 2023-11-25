import Image from "next/image"
import computer2 from "@/public/assets/images/computer2.png"

const links = [
  { name: 'Upcoming Events', href: '/upcoming-events' },
  { name: 'Prevoius Events', href: '/previous-events' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Meet our team', href: '/team' },
]


export default function About() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

   <div className="flex md:flex-row flex-col justify-between ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-red-400 sm:text-6xl">About us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Welcome to the heart of sports and community at CSE Department Association! Established with a vision to foster a vibrant and inclusive sports culture, we take pride in our role as a catalyst for camaraderie and excellence.We are driven by the collective enthusiasm of our members, whose love for sports transcends the boundaries of the playing field. Together, we strive to create an environment that not only encourages healthy competition but also nurtures personal growth, teamwork, and resilience.


          </p>
          
        </div>
        <div className="mt-10">
          <Image src={computer2} width={300} height={300} />
        </div>

        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          
          <h2 className="mt-10 text-4xl font-bold tracking-tight text-red-400 sm:text-6xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          At CSE Department Association, our mission is to provide a platform where every individual can discover, cultivate, and showcase their passion for sports and games. We believe in the power of athletics to unite our community, instill discipline, and create lasting memories.  Since our inception, we have organized numerous successful events, bringing together students, faculty, and sports enthusiasts alike. From memorable tournaments to community-building activities, our journey is a testament to the vibrant spirit that defines CSE Department.        </p>
          <h2 className="mt-10 text-4xl font-bold tracking-tight text-red-400 sm:text-6xl mb-10">Know More</h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a className="  hover:text-red-500 " key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
