import {Card, Image} from "@nextui-org/react";

interface CardData {
    imageUrl: string;
    title: string;
    sub: string;
}

export const CardSidebar = () => {
    
    const data: CardData[] = [
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Liked Songs",
            sub: "Playlist . 74 songs",
        },
        {
            imageUrl: "https://nextui.org/images/hero-card.jpeg",
            title: "Shared",
            sub: "Playlist . Valfar",
        },
        {
            imageUrl: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
            title: "Backstreet Boys: Greatest Hits",
            sub: "Playlist . Backstreet Boys",
        },
        {
            imageUrl: "https://nextui.org/images/hero-card.jpeg",
            title: "Weslife - The Best Of Weslife",
            sub: "Playlist . Philip Henriksson",
        },
    ];

    const dataArtist: CardData[] = [
        {
            imageUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            title: "One Republic",
            sub: "Artist",
        },
        {
            imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            title: "Glass Animal",
            sub: "Artist",
        },
        {
            imageUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            title: "Conor Price Playlist",
            sub: "Artist",
        },
        {
            imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            title: "GRiZ",
            sub: "Artist",
        },
    ];

    
    return (
        <>
            {/* Playlist */}
            {data.map((item, index) => (
                <div key={index} className="playlist flex flex-col mb-2 rounded-md cursor-pointer p-1">
                    <div className="flex items-center gap-4">
                        <Card
                        className="border-none w-[3.7rem] bg-spotify rounded-sm"
                        >
                        <Image
                            alt={`NextUI hero Image ${index + 1}`}
                            className="object-scale-down"
                            height={63}
                            src={item.imageUrl}
                            width={63}
                        />
                        </Card>
                        <div>
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="opacity-50 text-sm">{item.sub}</p>
                        </div>
                    </div>
                    
                </div>
                
            ))}

            {/* Artist */}
            {dataArtist.map((item, index) => (
                <div key={index} className="artist flex flex-col mb-2 rounded-md cursor-pointer p-1">
                    <div className="flex items-center gap-4">
                        <Card
                        className="border-none w-[3.7rem] bg-spotify  rounded-full"
                        >
                        <Image
                            alt={`NextUI hero Image ${index + 1}`}
                            className="object-scale-down"
                            height={63}
                            src={item.imageUrl}
                            width={63}
                        />
                        </Card>
                        <div>
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="opacity-50 text-sm">{item.sub}</p>
                        </div>
                    </div>
                    
                </div>
                
            ))}
        </>
    )
}
