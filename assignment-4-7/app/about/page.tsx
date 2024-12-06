import Image from "next/image";
import {DM_Sans} from "next/font/google";
import { Inter } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ['latin'],
  });

const inter = Inter({
    subsets: ["latin"],
  });  

export default function About() {
  return (
    <main className="m-auto w-[86vw] h-auto mt-28 xl:w-[80vw] xl:mt-44 md:mt-40">

        {/* About Section */}

        <section className="lg:flex lg:gap-10 xl:gap-48">           
             <div className="lg:w-[50%] ">
                <h1 className={` ${dmSans.className} font-semibold text-5xl  md:text-6xl  xl:text-[4.2vw] xl:font-medium `}>
                Hi I’m Mehmet Akif Karasu, 3D artist & sculptor.
                </h1>

                <p className={` ${dmSans.className} text-2xl text-[#606060] mt-7 md:text-3xl md:mt-10 lg:text-[2.2vw] lg:mt-12 xl:w-[30vw] 2xl:leading-10 2xl:mt-16`}>
                My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
                </p>

                <p className={` ${dmSans.className} text-2xl text-[#606060] mt-6  md:text-3xl md:mt-8 lg:text-[2.2vw] 2xl:leading-10 2xl:mt-11`}>
                Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.
                </p>
            </div>

            <div className="w-[70vw] m-auto mt-6 md:w-[65vw] md:mt-8 lg:w-[45%] lg:mt-0 xl:w-[35vw] xl:m-0 ">
                <Image 
                src="/images/Profile Photo.svg"
                alt="profile-photo"
                width={10}
                height={10}
                layout="responsive"
                />
            </div>
        </section>


        {/* Info Section */}

        <section className="mt-20 border-b-2 border-black md:mt-28 lg:mt-36">
            <div className="flex gap-16 lg:gap-20 xl:gap-1">
                <p className={` ${inter.className} text-[3.5vw] underline md:text-[3vw] lg:text-[2.4vw] lg:w-[25vw] xl:text-[1.41vw] xl:w-[13vw] 
                    xl:underline-offset-4 xl:font-semibold decoration-2`}>
                    Main Software
                </p>

                <div>
                <p className={`${inter.className} text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.3vw] xl:w-[33vw] xl:leading-6 2xl:leading-8`}>
                    Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger                  
                </p>
                <p className={`${inter.className} text-[3vw] mt-6 md:text-[2.5vw] md:mt-8 lg:text-[2vw] xl:text-[1.3vw] ` }>
                    Adobe CC, Figma, Ableton
                </p>
                </div>
            </div>

            <div className="flex gap-24 mt-12 md:mt-20 lg:gap-24 xl:gap-1">
                <p  className={` ${inter.className} text-[3.5vw] underline md:text-[3vw] lg:text-[2.4vw] lg:w-[25vw] xl:text-[1.41vw] xl:w-[13vw]
                    xl:underline-offset-4 xl:font-semibold decoration-2
                    `} >
                Main Skills
                </p>
               
                    <p className={`${inter.className} text-[3vw] mb-24 md:text-[2.5vw] md:mb-32 lg:text-[2vw] xl:text-[1.3vw] xl:w-[33vw] xl:leading-6 2xl:leading-8`} >
                    Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design
                    </p>              
            </div>
        </section>


        {/* Contact Section */}

        <section className="lg:flex lg:justify-between lg:items-center lg:mt-24 xl:mt-20">
            <div className="mt-14 flex justify-center items-center gap-2 md:mt-16 lg:w-[30vw] lg:mt-0">
                <h2 className={`${dmSans.className} text-[3.5vw] md:text-[2.5vw] lg:text-[2.3vw]  items-center lg:leading-7  2xl:leading-10 2xl:text-[2vw]` }>
                I am thrilled to answer to your next project 
                <span className="ml-2 text-[4vw] lg:text-[2.5vw] 2xl:text-[2vw]">&#10132;</span>
                </h2>


                
            </div>

            <div className="text-center mt-6 lg:mt-0 lg:mr-5">
                <h2 className={`${dmSans.className} text-[3.5vw] md:text-[2.5vw] lg:text-[2.3vw] 2xl:text-[2vw]`}>
                makifkarasu@outlook.com
                </h2>
                <p className={`${inter.className} text-[3vw] mt-4 md:text-[2.1vw] lg:text-[1.7vw] xl:text-start xl:text-[1.1vw] 2xl:text-[1.3vw]` }>
                View Resume
                </p>
            </div>
        </section>

    </main>
  )
}
