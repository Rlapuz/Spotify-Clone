"use client"


import { MdOutlineArrowBackIos , MdArrowForwardIos, MdOutlineArrowCircleDown} from "react-icons/md";
import { SlBell } from "react-icons/sl";
import {Avatar} from "@nextui-org/avatar";
import { CardMain } from "./sub-component/CardMain";
import { MidMain } from "./sub-component/MidMain";
import { useEffect } from "react";

export const Main = () => {

    return (
      <>
      
      <div className="flex flex-col ml-[29.2rem]">
            <div className="fixed z-40">
              <div className="pt-3 hot"></div>
              <nav className="spot rounded-t-lg p-5 ml-2 top-0 w-[104.7rem]">
                <div className="flex gap-[85rem]">
                    <div className="flex gap-2"> 
                      <div className="opacity-50 rounded-2xl arrow p-1">
                        <MdOutlineArrowBackIos size={23}  />
                      </div>
                      <div className="opacity-50 rounded-2xl arrow p-1">
                        <MdArrowForwardIos size={23}  />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="rounded-2xl arrow flex items-center gap-1 px-2 opacity-75 font-normal">
                        <span>
                          <MdOutlineArrowCircleDown size={20}/>
                        </span>
                          <p className="text-sm">
                            Install App
                          </p>
                      </button>

                      <button className="rounded-2xl arrow opacity-75 flex items-center px-2">
                        <SlBell size={20}/>
                      </button>
                        
                        <div className="">
                          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mt-5">
                  <button className="rounded-2xl play flex items-center gap-1 px-4 py-2 opacity-75 text-sm">All</button>
                  <button className="rounded-2xl play flex items-center gap-1 px-4 py-2 opacity-75 text-sm">Music</button>
                  <button className="rounded-2xl play flex items-center gap-1 px-4 py-2 opacity-75 text-sm">Podcasts</button>
                </div>
              </nav>
            </div>

        <main className="spotify h-auto flex flex-col rounded-b-lg p-5 ml-2 mt-[8.5rem]">
            <section className="flex flex-col items-start">
              <CardMain />
              <MidMain />
            </section>
        </main>
      </div>
      </>
  )
}
