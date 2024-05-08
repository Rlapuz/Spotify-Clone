import React from 'react'
import {Image} from "@nextui-org/react";
import { FiPlusCircle } from "react-icons/fi";
import { PiShuffleLight } from "react-icons/pi";
import { IoPlaySkipBack , IoPlaySkipForward } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { BiRepeat } from "react-icons/bi";
import {Slider} from "@nextui-org/react";
import { AiOutlinePlaySquare  } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { CgMiniPlayer } from "react-icons/cg";
import { TbArrowsDiagonal } from "react-icons/tb";

export const Footer = () => {
    return (
        <>
            <footer className='fixed bottom-0 w-full h-[6rem] mt-auto py-4 z-50'>
                <div className='flex justify-between items-center mx-5'>
                    <div className='flex justify-start items-center gap-3'>
                        <Image
                            width={80}
                            alt="card"
                            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                        <div className='flex flex-col items-center'>
                            <p className='text-sm font-bold opacity-80'>Youll Never Be Alone</p>
                            <p className='text-xs opacity-50'>Adventure Club, Kevin</p>
                        </div>
                        <FiPlusCircle size={20} className='opacity-50'/>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center  justify-center gap-5'>
                            <PiShuffleLight size={20} className='opacity-75' />
                            <IoPlaySkipBack size={20} className='opacity-75'/>
                            <FaCirclePlay size={35}/>
                            <IoPlaySkipForward size={20} className='opacity-75'/>
                            <BiRepeat size={20} className="transform rotate-180 opacity-75"/>
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                            <p className='text-xs'>0:00</p>
                            <Slider 
                                size="sm"
                                aria-label="Player progress" 
                                color="foreground"
                                hideThumb={true}
                                defaultValue={10}
                                className="w-[40rem]"
                            />
                            <p className='text-xs'>4:00</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <AiOutlinePlaySquare size={20}/>
                        <TbMicrophone2 size={20}/>
                        <HiOutlineQueueList size={20}/>
                        <Image src='/img/assets/bluesound.png' alt='bluesound' width={25}/>
                        <HiOutlineVolumeUp size={20}/>
                        <Slider 
                                size="sm"
                                aria-label="Player progress" 
                                color="foreground"
                                hideThumb={true}
                                defaultValue={10}
                                className="w-[5rem]"
                        />
                        <CgMiniPlayer size={20}/>
                        <TbArrowsDiagonal size={20}/>
                    </div>
                </div>
            </footer>
        </>
    )
}
