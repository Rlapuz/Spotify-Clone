import {Image} from "@nextui-org/react";
import { RecentlyPlayed } from "./RecentlyPlayed";


export const MidMain = () => {

    const data = [
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Daily Mix 1",
            description: "Backstreet Boys, Jack U, Avicii and more"
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Daily Mix 2",
            description: "Glass Animals, American Authors, The Score and..."
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Daily Mix 3",
            description: "Ollie, ChrispyD, Quinn XCII and more"
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Daily Mix 4",
            description: "AllttA, ZABO, San Holo and more"
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Daily Mix 5",
            description: "Hillsong UNITED, Hillsong Young & Free, Hillsong."
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Daily Mix 6",
            description: "Logic, K.A.AN, NF and more"
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Daily Mix 7",
            description: "Your weekly mixtape of fresh music. Enjoy new..."
        },
        
    ];
    const data2 = [
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Lagabog",
            description: "Skusta Clee, Illest Morena"
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Indie Mix",
            description: "Glass Animals, DAMPSTATE, Foster Th..."
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Mix - Lukas Graham",
            description: "Playlist Created with https://www.tunemymu..."
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "The Locker",
            description: "it's a generation ft. Softcult"
        },
    ];

    return (
        <>
            <main className='mt-10'>
                <h1 className='font-extrabold text-xl'>Made For Raymund Lapuz</h1>

                <section className="mt-4 flex gap-5">
                    {/* Map over the data array to generate divs dynamically */}
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 w-[12rem]">
                            <Image
                                width={250}
                                alt={`NextUI hero Image ${index + 1}`}
                                src={item.imageUrl}
                                className="rounded-lg"
                            />
                            <h6 className="font-bold opacity-80">{item.title}</h6>
                            <p className="text-sm opacity-50">{item.description}</p>
                        </div>
                    ))}
                </section>

                <h1 className='font-extrabold text-xl mt-10'>Jump back in</h1>
                <section className="mt-4 flex gap-5">
                    {/* Map over the data array to generate divs dynamically */}
                    {data2.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 w-[12rem]">
                            <Image
                                width={250}
                                alt={`NextUI hero Image ${index + 1}`}
                                src={item.imageUrl}
                                className="rounded-lg"
                            />
                            <h6 className="font-bold opacity-80">{item.title}</h6>
                            <p className="text-sm opacity-50">{item.description}</p>
                        </div>
                    ))}
                </section>

                <RecentlyPlayed />
            </main>
        </>
    )
}
