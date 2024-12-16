import React, { useEffect, useState } from "react";
import {
  framework,
  latestWorkBackground,
  react,
} from "./Latest Work Background/LatestWorkBackground";
import Button from "../../Components/Button/Button";

import axios from 'axios'

import "./LatestWork.css";

const LatestWork = ({ hidden, scroll }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isHover, setIsHover] = useState('')

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);

  });

  useEffect(() => {
    setIsHover('')
  }, [width])

  //MY BACKEND DATA FETCHING
  const [project, setProject] = useState();
  const url = 'http://localhost:4000';

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(`${url}/api/project`)
      setProject(response.data.data)
    }
    fetchProject()
  }, [])


  return (
    <>
      <div
        ref={scroll}
        className={`${hidden ? "hidden" : ""} min-h-[100vh] w-full font-[Bungee] text-[#1788ae] min-w-[15rem] relative max-lg:px-[1rem]`}>

        {/* HEADING LATEST WORK */}
        <div className="text-4xl text-center">
          <h1 className="inline-block border-b-2 border-zinc-950 py-4">Latest Work</h1>
        </div>
        {/* BACKGROUND IMG WITH LINK */}
        <div className="mt-16">
          <ul className="flex flex-col sm:gap-10 max-sm:gap-0 py-10">
            {
              project === undefined ? "" : project.map((all, i) =>
                <li key={i} className="flex justify-center overflow-hidden">
                  <div className={`${width > 1024 ? all.pl : ''} bg-black relative cursor-pointer shadow-[5px_5px_20px_8px_gray] my-10 group`}>
                    <img className={`lg:max-w-[45rem] opacity-[0.4]`} src={`${url}/images/${all.background}`} />

                    {/* HOVER BACKGROUND */}
                    <div className="absolute w-full h-full top-0 left-0">
                      <div className={`bg-[#263755] h-full w-0 ${width < 1024 ? '' : 'group-hover:w-full'} ${isHover === all.background ? 'w-[100%]' : ''} duration-300 trans opacity-85`}></div>
                    </div>

                    {/* HEADING */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="flex items-center justify-center h-full sm:text-4xl max-sm:text-xl text-white">
                        <h1 className={`${width < 1024 ? '' : 'sm:group-hover:-translate-y-20 max-sm:-translate-y-10'} ${isHover === all.background ? '-translate-y-10' : ''} duration-300`}>{all.heading}</h1>
                      </div>
                    </div>
                    {/* BUTTON */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className={`items-center justify-center h-full ${width < 1024 ? '' : 'group-hover:flex'} ${isHover === all.background ? 'flex' : 'hidden'} duration-300`}>
                        <a target="_" href={all.link}><Button value={'official site'} link={all.link} /></a>
                      </div>
                    </div>
                    {/* TECHNOLOGY USE */}
                    <div className="absolute top-0 left-0 h-full w-full max-sm:text-[10px]">
                      <div className={`hidden ${width < 1024 ? '' : 'group-hover:flex'} flex-wrap gap-3 pt-[10rem] items-center justify-center h-full text-white`}>

                        {
                          all.react ? react.map((tec) =>
                            <div className="rounded-[20rem] border border-zinc-300">
                              <h1 className="px-3 py-[2px]">{tec.name}</h1>
                            </div>
                          ) : framework.map((tech) =>
                            <div className="rounded-[20rem] border border-zinc-300">
                              <h1 className="px-3 py-[2px]">{tech.name}</h1>
                            </div>
                          )
                        }
                      </div>
                    </div>

                    {/* ECLIPSIS AND CORSS MARK */}
                    <div className={`absolute top-0 right-0  `}>
                      <div onClick={() => {
                        setIsHover(all.background)
                      }} className={`w-12 h-10 ${width < 1024 ? 'flex' : 'hidden'} items-center justify-center`}>
                        <i className={`fa-solid fa-ellipsis text-2xl text-white  ${isHover !== all.background ? 'block' : 'hidden'}`}></i>
                        <i onClick={(e) => {
                          e.stopPropagation()
                          setIsHover('')
                        }} className={`fa-solid fa-xmark text-2xl text-white ${isHover !== all.background ? 'hidden' : 'block'}`}></i>
                      </div>
                    </div>

                    {/* NUMBER POPUP */}
                    <div className={`${width < 1024 ? 'hidden' : ''} absolute top-0 ${all.side} select-none`}>
                      <div data-text={all.sr} className="text -translate-y-10 group-hover:-translate-y-16 duration-300 opacity-0 group-hover:opacity-100">
                        <h1 className="text-[8rem] bg-transparent">{all.sr}</h1>
                      </div>
                    </div>

                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </div >
    </>
  );
};

export default LatestWork;
