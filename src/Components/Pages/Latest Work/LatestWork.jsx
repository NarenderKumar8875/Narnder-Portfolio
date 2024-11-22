import React from 'react'
import { framework, latestWorkBackground, react } from './Latest Work Background/LatestWorkBackground'

const LatestWork = ({ hidden, scroll }) => {

    return (
        <>
            <div ref={scroll} className={`${hidden ? 'hidden' : ''} w-full min-h-[100vh] font-[Bungee] text-[#1788ae] min-w-[15rem]`}>

                <div className='text-center md:text-4xl max-md:text-2xl'>
                    <h1 className='py-5 border-b-2 border-[#1788ae] inline-block'>Latest Work</h1>
                </div>


                <div className='py-10 md:px-20 max-md:px-[1rem] grid md:grid-cols-[repeat(auto-fill,_minmax(24rem,1fr))] gap-5'>
                    {
                        latestWorkBackground.map((bg, i) =>
                            <div key={i} className='relative group cursor-auto bg-zinc-950 overflow-hidden'>

                                <img className='group-hover:blur-[1px] opacity-30' src={bg.background} />

                                <div className='absolute top-0 left-0 w-full h-full'>
                                    <div className='w-full h-full flex flex-col justify-center items-center'>
                                        <img className='md:w-[12rem] max-md:w-[8rem] z-10 md:group-hover:-translate-y-40 max-md:group-hover:-translate-y-40 duration-200' src={bg.bglogo} />
                                        <div className='z-10 hidden group-hover:block md:text-2xl text-zinc-400 hover:text-white duration-200 md:-translate-y-10 max-md:-translate-y-5'>
                                            <a target='_' href={bg.link}><h1>{bg.text}</h1></a>
                                        </div>

                                        <div className='flex flex-col md:gap-3 max-md:gap-1 max-md:text-[12px] flex-wrap items-center justify-center z-10 group-hover:-translate-y-5'>
                                            <h1 className='text-yellow-500 hidden group-hover:block'>Technology</h1>
                                            {

                                                bg.react ? react.map((e) =>
                                                    <div key={crypto.randomUUID()} className='text-white bg-zinc-950 bg-opacity-50 rounded-[10rem] z-10 hidden group-hover:block'>
                                                        <p className='px-3 py-1'>{e.name}</p>
                                                    </div>
                                                ) :
                                                    framework.map((e) =>
                                                        <div key={crypto.randomUUID()} className='text-white bg-zinc-950 bg-opacity-50 rounded-[10rem] z-10 hidden group-hover:block'>
                                                            <p className='px-3 py-1'>{e.name}</p>
                                                        </div>
                                                    )

                                            }

                                        </div>

                                    </div>

                                </div>

                                <div className=' absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-85 duration-200 bg-gradient-to-r from-[#1c164c] to-[#1c164c]'>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default LatestWork
