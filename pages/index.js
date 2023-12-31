import react from 'react'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className ={darkMode ? 'dark' :''}>
      <Head>
        <title>
          irfansajal Portfolio
        </title>
      </Head>
      <main className='px-10 md:px-20 lg:px-40 dark:bg-gray-700'>
        <section className=' bg-slate-200min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Developerzone</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick ={() => setDarkMode(!darkMode)}  className='cursor-pointer text-2xl' />
              </li>
              <li> <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          {/* font page here */}
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Irfan Sajal</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Font end Developer and designer</h3>
            <p className='text-md py-5 leading-8 text-gray-700 md:text-xl'>Passionate coder <br /> Lets code the future
            </p>
          </div>
          {/* buttons */}
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          {/* image */}
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>
        {/* another section */}
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Since the beginning of my journey as a freel developer,I,ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          {/* our card system */}
          <div className='lg:flex gap-10 dark:bg-white'>
           <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
          
              <div className='mx-auto'>
              <Image src={design} width={100} height={100} className='mx-auto' />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs design theory</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div> 
            {/* second */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
          
          <div className='mx-auto'>
          <Image src={code} width={100} height={100} className='mx-auto' />
          </div>
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>Creating elegant designs suited for your needs design theory</p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
        </div> 
        {/* thrird */}
        <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
          
          <div className='mx-auto'>
          <Image src={consulting} width={100} height={100} className='mx-auto' />
          </div>
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>Creating elegant designs suited for your needs design theory</p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
        </div> 
        </div>
          {/* section portflio */}
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          {/* all web image section */}
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
