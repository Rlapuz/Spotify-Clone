import {Card, Image} from "@nextui-org/react";
import { AiOutlinePlaySquare  } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

interface CardData {
    imageUrl: string;
    title: string;
    sub: string;
}

export const NextFromRightSidebar = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const data: CardData[] = [
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "My Type",
            sub: "Video . Saweetie",
        },
        {
            imageUrl: "https://nextui.org/images/hero-card.jpeg",
            title: "Mama Said",
            sub: "Lukas Graham",
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Sucker",
            sub: "Video . Jonas Brothers",
        },
        {
            imageUrl: "https://nextui.org/images/hero-card.jpeg",
            title: "1night",
            sub: "Daddy NAT",
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "My Type",
            sub: "Video . Saweetie",
        },
        {
            imageUrl: "https://nextui.org/images/hero-card.jpeg",
            title: "Mama Said",
            sub: "Lukas Graham",
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Sucker",
            sub: "Video . Jonas Brothers",
        },
        {
            imageUrl: "https://nextui.org/images/hero-card.jpeg",
            title: "1night",
            sub: "Daddy NAT",
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "My Type",
            sub: "Video . Saweetie",
        },
        {
            imageUrl: "https://nextui.org/images/hero-card.jpeg",
            title: "Mama Said",
            sub: "Lukas Graham",
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Sucker",
            sub: "Video . Jonas Brothers",
        },
        {
            imageUrl: "https://nextui.org/images/hero-card.jpeg",
            title: "1night",
            sub: "Daddy NAT",
        },
        
    ];

    return (
        <>  
            <h3 className="font-bold mt-10 mb-4">Next from: Liked Songs</h3>
            {data.map((item, index) => (
                <main key={index} className=" flex flex-col rounded-md mb-1">

                    <section className="playlist py-1 flex justify-between items-center cursor-pointer rounded-lg"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex items-center gap-3">
                            <Card
                                className="border-none w-[3.7rem] bg-spotify"
                            >
                            <Image
                                alt={`NextUI hero Image ${index + 1}`}
                                className="object-scale-down"
                                height={63}
                                src={item.imageUrl}
                                width={63}
                            />
                            </Card>
                            <div className="flex flex-col">
                                <h5 className="font-medium">{item.title}</h5>
                                    <div className="flex gap-2">
                                            <AiOutlinePlaySquare size={20} className="opacity-50"/>
                                            <p className="opacity-50 text-sm truncate">{item.sub}</p>
                                    </div>
                            </div>
                        </div>
                        {hoveredIndex === index && (
                            <div className="flex items-center opacity-50 mr-[-0.5rem]">
                                <BsThreeDots size={20} />
                            </div>
                        )}
                    </section>
                </main>
            ))}
        </>
    )
}
