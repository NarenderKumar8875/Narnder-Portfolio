import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'


import mongoDB from "./Logo's/mongodb-icon-1.svg";
import express from "./Logo's/icon-expressjs.svg";
import react from "./Logo's/React-icon.svg.png";
import node from "./Logo's/node.svg";

import './about.css'

import coderBG from './coder.svg'


const know = [
  { name: '#javascript' },
  { name: '#react.js' },
  { name: '#redux' },
  { name: '#node.js' },
  { name: '#express.js' },
  { name: '#mongoDB' },
  { name: '#mongoose' },
  { name: '#cloudinary' },
  { name: '#ejs' },
  { name: '#html' },
  { name: '#css' },
  { name: '#sass' },
  { name: '#bootstrap' },
  { name: '#tailwind' },
  { name: '#git' },
  { name: '#github' },
  { name: '#aws' },
  { name: '#terminal' },
  { name: '#adobeXD' },
  { name: '#figma' },
]

const About = ({ hidden, setHidden }) => {

  const [mongoPopUp, setMongoPopUp] = useState(false)
  const [expPopUp, setExpPopUp] = useState(false)
  const [reactopUp, setReactPopUp] = useState(false)
  const [nodePopUp, setNodePopUp] = useState(false)


  return (
    createPortal(
      <>
        <div className='flex justify-center'>
          <div className={`w-full h-screen absolute top-0 text-white md:px-10 max-md:px-2 z-10 font-[Bungee] min-w-[15rem] ${hidden ? 'screen' : 'hidden'}`}>

            <div className='md:px-20 max-md:px-5 h-full py-12 overflow-auto scroll lg:flex bg-[#191919] max-lg:text-center relative'>

              <div className='absolute top-5 right-5 '>
                <div onClick={() => {
                  setHidden((prev) => !prev)
                }} className='w-8 h-8 bg-[#27292d] cursor-pointer flex justify-center items-center rounded-full'>
                  <i className="fa-solid fa-xmark md:text-2xl max-md:text-[16px]"></i>
                </div>
              </div>

              <div className=''>

                <div className='w-full break-words'>
                  <h1 className='md:text-2xl text-xl text-[#1788ae]'>ABOUT ME</h1>
                  <p className='max-md:text-[11px]'>I help business owners and busy web developers to design &
                    develop creative websites that fits their vision and attracts the
                    visitors to stay for ever. Technologies and tools that I use to create
                    such awesome websites.</p>
                </div>

                <div className='flex flex-wrap gap-2 py-3 max-md:text-[11px] max-md:items-center justify-center'>
                  {
                    know.map((know) =>
                      <div className='px-3 py-[3px] border border-zinc-400 rounded-[10rem] inline-block'>
                        <p>{know.name}</p>
                      </div>
                    )
                  }
                </div>

                <div className=' flex flex-col gap-10'>
                  <h1 className='md:text-2xl max-md:text-xl font-bold text-[#1788ae]'>MERN STACK</h1>
                  <div className='flex md:gap-3 max-md:gap-1 items-center max-lg:justify-center '>

                    <div className='relative'>

                      <div className={`${mongoPopUp ? '' : 'hidden pop'} pointer-events-none absolute ${mongoPopUp ? 'mov' : ''} -left-0 max-md:-left-2 z-10`}>
                        <div className=" bg-[#6cac48]  text-[#ffff] rounded-[10rem]">
                          <h1 className='md:px-4 max-md:px-1 max-md:text-[14px] py-[3px]'>mongoDB</h1>
                        </div>
                        <div className="absolute w-4 h-4 bg-[#6cac48] top-[17px] left-7 -z-[1] rotate-45"></div>
                      </div>

                      <div onMouseEnter={() => setMongoPopUp(true)}
                        onMouseLeave={() => setMongoPopUp(false)} className={`group pointer-events-auto flex flex-col items-center justify-between md:w-[5rem] max-md:w-[3.5rem] md:h-[7rem] max-md:h-[5.5rem]`}>
                        <img className='md:w-16 max-md:w-10' src={mongoDB} />
                        <h1 className={`text-[#6cac48] md:text-2xl max-md:text-xl font-bold`}>
                          M
                        </h1>
                      </div>
                    </div>

                    <div className='relative'>

                      <div className={`${expPopUp ? '' : 'hidden pop'} pointer-events-none absolute ${expPopUp ? 'mov' : ''} md:-left-0 max-md:-left-2 z-10`}>
                        <div className=" bg-[#ffff]  text-[black] rounded-[10rem]">
                          <h1 className='md:px-4 max-md:px-1 max-md:text-[14px] py-[3px]'>Express</h1>
                        </div>
                        <div className="absolute w-4 h-4 bg-[#ffff] top-[17px] left-7 -z-[1] rotate-45"></div>
                      </div>

                      <div onMouseEnter={() => setExpPopUp(true)}
                        onMouseLeave={() => setExpPopUp(false)} className={`group pointer-events-auto flex flex-col items-center justify-between md:w-[5rem] max-md:w-[3.5rem] md:h-[7rem] max-md:h-[5.5rem]`}>
                        <img className='md:w-16 max-md:w-10' src={express} />
                        <h1 className={`text-[#ffff] md:text-2xl max-md:text-xl font-bold`}>
                          E
                        </h1>
                      </div>
                    </div>

                    <div className='relative'>

                      <div className={`${reactopUp ? '' : 'hidden pop'} pointer-events-none absolute ${reactopUp ? 'mov' : ''} md:-left-0 max-md:-left-2 z-10`}>
                        <div className=" bg-[#61dafb]  text-[black] rounded-[10rem]">
                          <h1 className='md:px-4 max-md:px-1 max-md:text-[14px] py-[3px]'>React.js</h1>
                        </div>
                        <div className="absolute w-4 h-4 bg-[#61dafb] top-[17px] left-7 -z-[1] rotate-45"></div>
                      </div>

                      <div onMouseEnter={() => setReactPopUp(true)}
                        onMouseLeave={() => setReactPopUp(false)} className={`group pointer-events-auto flex flex-col items-center justify-between md:w-[5rem] max-md:w-[3.5rem] md:h-[7rem] max-md:h-[5.5rem]`}>
                        <img className='md:w-16 max-md:w-10' src={react} />
                        <h1 className={`text-[#61dafb] md:text-2xl max-md:text-xl font-bold`}>
                          R
                        </h1>
                      </div>
                    </div>

                    <div className='relative'>

                      <div className={`${nodePopUp ? '' : 'hidden pop'} pointer-events-none absolute ${nodePopUp ? 'mov' : ''} md:-left-0 max-md:-left-2 z-10`}>
                        <div className=" bg-[#6cac48]  text-[#ffff] rounded-[10rem]">
                          <h1 className='md:px-4 max-md:px-1 max-md:text-[14px] py-[3px]'>NODE.JS</h1>
                        </div>
                        <div className="absolute w-4 h-4 bg-[#6cac48] top-[17px] left-7 -z-[1] rotate-45"></div>
                      </div>

                      <div onMouseEnter={() => setNodePopUp(true)}
                        onMouseLeave={() => setNodePopUp(false)} className={`group pointer-events-auto flex flex-col items-center justify-between md:w-[5rem] max-md:w-[3.5rem] md:h-[7rem] max-md:h-[5.5rem]`}>
                        <img className='md:w-16 max-md:w-10' src={node} />
                        <h1 className={`text-[#6cac48] md:text-2xl max-md:text-xl font-bold`}>
                          N
                        </h1>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className='flex justify-center items-center'>
                <img className='lg:max-w-[38rem]' src={coderBG} />
              </div>

            </div>

          </div>
        </div>
      </>,
      document.getElementById('about-pop-up')
    )
  )
}

export default About
