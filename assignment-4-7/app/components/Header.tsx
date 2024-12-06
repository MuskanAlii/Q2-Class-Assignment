import Image from "next/image"
import {DM_Sans} from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
    subsets: ['latin'],
  });

export default function Header() {
  return (
    <>
        <header className="w-[86vw] h-[4.69vw] m-auto mt-12 flex justify-between items-center xl:mt-28 xl:w-[80vw]">
        <div className="w-[10vw] md:w-[9vw] lg:w-[7vw] xl:w-[5.27vw] ">
            <Image
            src={"/images/site-logo.svg"}
            alt="logo"
            layout="responsive"
            width={100}
            height={100}
            />
        </div>
        <div>
            <ul 
            className={` ${dmSans.className} flex gap-5 text-[3.3vw] md:text-[2.80vw] lg:text-[2.2vw] xl:text-[1.56vw] xl:font-medium xl:gap-6`}>
               <Link href="/"><li>Work</li></Link> 
                <Link href="/about"><li>About</li></Link>
                <li>Playground</li>
                <li>Contact</li>
            </ul>
        </div>
        
        </header>
    </>
  )
}


