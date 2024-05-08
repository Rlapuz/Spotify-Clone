"use client"

import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { HiMiniPlus } from "react-icons/hi2";
import { MdArrowForward } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

import Image from "next/image";


export const Sidebar = () => {

    return (
        <>  
            <section className="fixed left-0 z-40 ml-2">
            <div className="shadow-sm rounded-lg h-auto mt-3 p-5 spotify" >
                <ul className="flex items-center gap-3 mb-5">
                <GoHome 
                    className="font-bold"
                    size={25}
                    />
                <h1 className="gYdBJW encore-text-body-medium-bold opacity-50">Home</h1>
                </ul>
                <ul className="flex items-center gap-3">
                <CiSearch
                    className="font-bold"
                    size={25}
                    />
                <h1 className="gYdBJW encore-text-body-medium-bold opacity-50">Search</h1>
                </ul>
            </div>
            {/* <div className="line"></div> */}

            <div className="shadow-sm rounded-lg mt-2 p-5 spotify flex flex-col gap-5 h-[66rem]">
                <nav className="flex gap-[14rem]">
                    <div className="flex gap-3 items-center">
                    <Image src="/img/assets/library1.png" className="opacity-50" width={30} height={30} alt="library"/>
                    <h1 className="font-bold opacity-50">Your Library</h1>
                    </div>
                        <div className="flex gap-3 items-center opacity-50">
                            <HiMiniPlus size={25}/>
                            <MdArrowForward size={25} />
                        </div>
                </nav>

                <div className="flex justify-start gap-5 mt-3">
                    <button className="rounded-2xl px-3 py-1 play opacity-75">Playlists</button>
                    <button className="rounded-2xl px-3 py-1 play opacity-75">Artists</button>
                </div>

                <div className="flex gap-[20rem]">
                    <div>
                        <CiSearch
                        className="font-bold"
                        size={20}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="font-medium opacity-50">Recents</h1>
                        <TfiMenuAlt 
                        className="font-bold mt-1 opacity-50"
                        size={19}
                        />
                    </div>
                </div>
            </div>

            </section>
        </>
    )
}
