import { DM_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
const dmSans = DM_Sans({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="m-auto w-[86vw] h-auto mt-28 xl:w-[80vw]">

     {/* heading section  */}

      <section>
        <div className="lg:flex">
          <h1
            className={`${dmSans.className} text-5xl font-semibold md:text-6xl lg:w-[50%] xl:text-[4.5vw] xl:font-medium xl:w-[45%]`}
          >
            Hello, I’m <br /> Mehmet Akif.
          </h1>
          <p
            className={` ${dmSans.className}
               text-[#606060] text-2xl mt-5 
                md:text-3xl md:mt-8 
                lg:w-[50%] lg:text-[2.2vw] lg:mt-16
                xl:text-[2.2vw] xl:font-normal xl:w-[43vw] xl:mt-20
                xl:leading-[2.5vw]`}
          >
            A senior-year design student who trying to specialize in 3D modeling
            & texturing.
          </p>
        </div>
        <div className="w-8 mt-11 md:w-11 md:mt-14 lg:w-9 lg:mt-24">
          <Image
            src="/images/arrow.svg"
            alt="arrow symbol"
            width={10}
            height={10}
            layout="responsive"
          />
        </div>
      </section>

      {/* project 01 section */}

      <section className="border-b-2 border-black">
        <div className=" lg:flex lg:gap-28">
          <div className="lg:w-[30vw]">
            <h4
              className={` ${inter.className}
             mt-16 text-2xl font-semibold
             md:text-[2.7vw] md:mt-20
             lg:text-[1.8vw] lg:mt-28
             xl:text-[1.3vw] xl:font-medium
             `}
            >
              01 / PROJECT NAME
            </h4>

            <p
              className={`${inter.className} 
            text-[3.3vw] font-normal mt-8 text-[#181717]
            md:text-[2.6vw] md:mt-10
            lg:text-[1.7vw] lg:mt-6
            xl:text-[1.3vw] xl:leading-5 xl:mt-4
            2xl:mt-6 2xl:leading-8
            `}
            >
              Goblin concept digital sculpture with human-like skin. Learned a
              lot of quick tips and look development.
            </p>

            <p
              className={`${inter.className}
          text-[#606060] text-xl mt-6
          md:text-[2.3vw] md:mt-8  
          lg:text-[1.4vw] lg:mt-5   
          xl:text-[1vw]  xl:leading-4 xl:font-normal
          lg:leading-5
           2xl:mt-6 2xl:leading-7
          `}
            >
              Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured
              in Mari, Rendered using Arnold.
            </p>
          </div>

          <div className="mt-10 md:mt-12  lg:w-[50vw] lg:mt-28 xl:mt-32">
            <Image
              src={"/images/Thumbnail.svg"}
              alt="project image"
              width={30}
              height={30}
              layout="responsive"
            />
          </div>
        </div>

        <div>
          <p
            className={` ${inter.className}
          mt-7 text-xl underline underline-offset-4 mb-14
          md:mt-9 md:text-[2.3vw]
          lg:text-[1.6vw] lg:mt-5 lg:mb-20
           xl:text-[1.3vw] xl:font-medium xl:mt-0
           2xl:mb-32
          
          
          `}
          >
            More shots from this project ↗
          </p>
        </div>
      </section>

      {/* project 02 section */}       

      <section className="border-b-2 border-black">
        <div className=" lg:flex lg:gap-28">
          <div className="lg:w-[30vw]">
            <h4
              className={` ${inter.className}
      mt-16 text-2xl font-semibold
      md:text-[2.7vw] md:mt-20
      lg:text-[1.8vw] lg:mt-28
      xl:text-[1.3vw] xl:font-medium
      `}
            >
              02 / PROJECT NAME
            </h4>

            <p
              className={`${inter.className} 
     text-[3.3vw] font-mormal mt-8
     md:text-[2.6vw] md:mt-10
     lg:text-[1.7vw] lg:mt-6
     xl:text-[1.3vw] xl:leading-5 xl:mt-4
      2xl:mt-6 2xl:leading-8
     `}
            >
              Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.
            </p>

           
          </div>

          <div className="mt-10 md:mt-12  lg:w-[50vw] lg:mt-28 xl:mt-32 ">
            <Image
              src={"/images/Thumbnail.svg"}
              alt="project image"
              width={30}
              height={30}
              layout="responsive"
            />
          </div>
        </div>

        <div className="lg:">
          <p
            className={` ${inter.className}
   mt-7 text-xl underline underline-offset-4 mb-14
   md:mt-9 md:text-[2.3vw]
   lg:text-[1.6vw] lg:mt-5 lg:mb-20
   xl:text-[1.3vw] xl:font-medium xl:mt-0
    2xl:mb-32
   `}
          >
            See case study →
          </p>
        </div>
      </section>

      {/* project 03 section */}

      <section className="border-b-2 border-black">
        <div className=" lg:flex lg:gap-28">
          <div className="lg:w-[30vw]">
            <h4
              className={` ${inter.className}
      mt-16 text-2xl font-semibold
      md:text-[2.7vw] md:mt-20
      lg:text-[1.8vw] lg:mt-28
       xl:text-[1.3vw] xl:font-medium
      `}
            >
              03 / PROJECT NAME
            </h4>

            <p
              className={`${inter.className} 
     text-[3.3vw] font-mormal mt-8
     md:text-[2.6vw] md:mt-10
     lg:text-[1.7vw] lg:mt-6
     xl:text-[1.3vw] xl:leading-5 xl:mt-4
      2xl:mt-6 2xl:leading-8
     `}
            >
             Experimental creature modeling for school project.
            </p>

          </div>

          <div className="mt-10 md:mt-12  lg:w-[50vw] lg:mt-28 xl:mt-32">
            <Image
              src={"/images/Thumbnail.svg"}
              alt="project image"
              width={30}
              height={30}
              layout="responsive"
            />
          </div>
        </div>

        <div className="lg:">
          <p
            className={` ${inter.className}
   mt-7 text-xl underline underline-offset-4 mb-14
   md:mt-9 md:text-[2.3vw]
   lg:text-[1.6vw] lg:mt-5 lg:mb-20
   xl:text-[1.3vw] xl:font-medium xl:mt-0
    2xl:mb-32
   
   
   `}
          >
            Project WIP
          </p>
        </div>
      </section>
    </main>
  );
}
