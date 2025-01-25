import Image from "next/image"

export const Cover = ({ children, background }) => {
    return <div className="h-screen text-white bg-[#e8e9ed] relative min-h-[400px] flex justify-center items-center">
        <Image alt="Cover" src={background} fill className="object-cover" />
        <div className="max-w-5xl z-10">   
             {children}
        </div>
    </div>
}