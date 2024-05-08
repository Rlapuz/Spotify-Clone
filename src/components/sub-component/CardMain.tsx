import React from 'react'
import {Image} from "@nextui-org/react";


export const CardMain = () => {

    const data = [
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
            title: "Shared"
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
            title: "Shared"
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
            title: "Shared"
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
            title: "Shared"
        },
        
    ];

    return (
        <>
            {[...Array(2)].map((_, index) => (
                <div key={index} className={`mt-${index === 0 ? 6 : 3} flex gap-3`}>
                    {data.map((item, i) => (
                        <div key={i} className="play w-[25rem] flex">
                            <Image
                                width={130}
                                alt={`NextUI hero Image ${i + 1}`}
                                src={item.imageUrl}
                            />
                            <h1 className="text-center flex justify-center items-center ml-5 font-bold">{item.title}</h1>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}
