"use client"

import { useState } from "react"
import Image from "next/image"


export const Dashboard = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <nav>
                <div className='flex justify-center items-center gap-10 mt-5'>
                    <Image 
                    src='/img/Spotify_icon.svg'
                    alt="Logo"
                    width={50}
                    height={50}
                    />
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                    </div>
            </nav>
        </>
    )
}

export default Dashboard