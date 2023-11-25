import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CSE dept',
  description: 'CSE dept association website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <main className=' '>

      <Navbar/>
        </main>
     
        {children}
      </body>
    </html>
  )
}
