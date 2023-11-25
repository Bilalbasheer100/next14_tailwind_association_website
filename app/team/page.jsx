import profile from "@/public/assets/images/profile2.avif"


import Image from "next/image"
const people = [
  {
    name: 'Oliver Thompson',
    role: 'Captian',
    // imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

  },
  {
    name: 'Maya Rodriguez',
    role: 'Vice Captian',
    // imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ethan Walker',
    role: 'Treasurer',
    // imageUrl:https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Secretary',
    // imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sophia Patel',
    role: 'Joint Secretary',
    // imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Jackson Kim',
    role: 'Joint Secretary',
    // imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]


export default function Team() {
  return (
    <div className="bg-dark-2 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white-100 sm:text-4xl text-white">Meet our <span className="text-red-400">Team</span> </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 ">
          At CSE Department Association, we take pride in our passionate and committed team. Each member contributes unique talents and skills, working together to create an enriching sports and games experience for our community.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 ">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                {/* <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" /> */}
                <Image className=" rounded-full" src={profile} width={140} 
                 height={140} alt=""/>
                <div>
                  <h3 className="text-white text-base font-semibold leading-7 tracking-tight text-white-100">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-red-400">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
            {/* <Image className=" rounded-full" src={profile} width={60} 
                 height={60} alt=""/>  */}
        </ul>
      </div>
    </div>
  )
}
