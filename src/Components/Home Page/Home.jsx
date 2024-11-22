import React, { useRef, useState } from 'react'
import nLogo from './Real logo.svg'
import mainLogo from './mainLogo.svg'

import MatterScene from '../anim'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import About from '../Pages/About Page/About'
import LatestWork from '../Pages/Latest Work/LatestWork'

const links = [
  { logo: <i className="fa-brands fa-linkedin"></i>, link: '/' },
  { logo: <i className="fa-brands fa-x-twitter"></i>, link: '/' },
  { logo: <i className="fa-brands fa-instagram"></i>, link: '/' },
  { logo: <i className="fa-regular fa-envelope"></i>, link: '/' },
  { logo: <i className="fa-brands fa-github"></i>, link: '/' },
]



const Home = () => {

  const [hidden, setHidden] = useState(false)
  const scroll = useRef(null)

  

  return (
    <>
      <header className='bg-[#111111] font-[Bungee] sm:bg-transparent pointer-events-none h-screen md:px-16 max-md:px-5 min-w-[15rem] py-2 relative z-10'>

        <div className='flex items-center justify-between'>
          <div className='w-20 h-20 pointer-events-auto cursor-pointer '>
            <img className='sm:w-[4.5rem] max-sm:w-[3rem]' src={nLogo} />
          </div>
          <div className='w-10 h-10 pointer-events-auto cursor-pointer flex justify-center items-center group'>
            <i className="fa-regular fa-paper-plane text-2xl text-[#b0b2c3] hover:text-white group-hover:scale-110 duration-200"></i>
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='text-white flex flex-col gap-5 sm:pl-20 pt-20 items-start z-10'>
            <h1 className='sm:text-6xl max-sm:text-2xl font-bold'>Narender Kumar</h1>
            <h1 className=' sm:text-3xl max-sm:text-xl font-extralight'><b className='sm:text-4xl max-sm:text-3xl text-[#dd052b]'>MERN</b> Stack Developer</h1>
            <div className='flex items-center justify-center relative group'>
              <Button value={'About Me'} hidden={hidden} setHidden={setHidden} />
              <i className="fa-solid fa-arrow-right-long sm:text-4xl max-sm:text-2xl absolute z-10 sm:-right-5 max-sm:-right-4 sm:group-hover:-right-10 duration-200 max-sm:group-hover:-right-7"></i>
            </div>
          </div>

          <div className='text-[#b0b2c3] text-3xl sm:mt-20 max-sm:pt-5 flex flex-col gap-6'>
            {
              links.map((link, i) =>
                <div key={i} className='w-10 h-10 flex justify-center items-center pointer-events-auto group'>
                  <Link className='group-hover:scale-110 duration-200 group-hover:text-white' to={link.link}>{link.logo}</Link>
                </div>
              )
            }
          </div>
        </div>

        <div className='absolute top-28  xl:right-[20rem] max-xl:right-[5rem] max-sm:right-10 min-w-[15rem] -z-10'>
          <img className='md:w-[25rem] max-md:w-[15rem]' src={mainLogo} />
        </div>

        <div className='flex justify-center items-center relative group mt-10'>
          <Button value={'Latest Work'} scroll={scroll} />
          <i className="fa-solid fa-arrow-down-long sm:text-4xl max-sm:text-2xl absolute top-[1.9rem] sm:group-hover:top-[2.8rem] max-sm:group-hover:top-[2.5rem] duration-200 z-10 text-white"></i>
        </div>

      </header>

      <div className='absolute top-0 left-0 w-full bg-transparent z-0 max-sm:hidden'>
        <MatterScene />
      </div>

      <About hidden={hidden} setHidden={setHidden} />

      <LatestWork hidden={hidden} scroll={scroll}/>
    </>
  )
}

export default Home
