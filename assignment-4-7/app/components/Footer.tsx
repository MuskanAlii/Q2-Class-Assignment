import {DM_Sans} from "next/font/google";

const dmSans = DM_Sans({
    subsets: ['latin'],
  });

function Footer() {
  return (
    <>
    <footer className="w-[86vw] h-[4.69vw] m-auto mt-20 mb-28
    xl:flex xl:justify-between items-center  xl:w-[80vw] xl:mt-40 xl:mb-14
    ">
    <div>
        <p className={`${dmSans.className} text-[#2429AF] font-medium text-2xl text-center xl:text-xl 2xl:text-3xl
            
            `}>Mehmet Akif Karasu ⏤ 2020 </p>
    </div>
    <div >
        <ul className={`${dmSans.className} flex font-medium justify-evenly mt-4 text-2xl xl:gap-9 xl:mt-0 xl:text-xl 2xl:text-3xl`}>
            <li>Artstation</li>
            <li>Linkedin</li>
            <li>Twitter</li>
        </ul>
    </div>
    </footer>
    </>
  )
}

export default Footer