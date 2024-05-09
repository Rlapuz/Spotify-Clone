"use client"

import { RxCross2 } from "react-icons/rx";
import { useEffect } from 'react';
import {Card, Image} from "@nextui-org/react";
import { AiOutlinePlaySquare  } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { NextFromRightSidebar } from "./sub-component/NextFromRightSidebar";



export const RightSidebar = () => {
  return (
      <>
        <div className="flex flex-col ml-[0.5rem]">

          <div className="fixed top-0 right-3 z-40">
            <div className="pt-3 hot"></div>
              <div className=" flex flex-col">
                <nav className="flex items-center gap-[15.3rem] spotify p-5 rounded-t-lg">
                      <h1 className="font-bold">Shared</h1>
                      <RxCross2 size={20}/>
                </nav>
              </div>
          </div>

              <main className="shadow-sm rounded-b-lg mt-[4.7rem] p-5 spotify flex flex-col">
                <h3 className="font-bold mb-4">Now playing</h3>

                <section className="flex space-between gap-[7.2rem]">
                  <div className="flex items-center gap-3">
                    <Card
                          className="border-none w-[3.7rem] bg-spotify"
                          >
                          <Image
                              alt="image"
                              className="object-scale-down"
                              height={63}
                              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                              width={63}
                          />
                      </Card>
                          <div className="flex flex-col">
                              <h5 className="font-medium">The Nights</h5>
                              <div className="flex gap-2">
                                <AiOutlinePlaySquare size={20} className="opacity-50"/>
                                <p className="opacity-50 text-sm">Video . Avicii</p>
                              </div>
                          </div>
                  </div>
                  <div className="flex items-center opacity-50 mr-[0.3rem]">
                    <BsThreeDots size={20}/>
                  </div>
                </section>
                <NextFromRightSidebar />
              </main>
        </div>  
      </>
  )
}
