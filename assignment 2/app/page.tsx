// Assignment 02: Clone the Governor Sindh website's navbar and hero section using Next.js, concept of reusable components.
import Image
 from "next/image";
export default function Home() {
  return (
    <div className="relative w-full">
      <div>
        <Image 
          className= " bg-white opacity-25"
          src="/images/governor-house.jpg"
          alt=""
          width={1500} height={1500}
        />
      </div>

      <div className="w-10">
        <Image
          className=" absolute bottom-0 -right-40"
          src="/images/kamran-tessori.png"
          alt=""
          width={795} 
          height={800}
        />
      </div>

      <div className="space-y-4 w-1/2 absolute bottom-40 left-9 text-5xl">
        <h1 className="text-customBlue font-extrabold text-5xl">
          Governor Sindh
        </h1>

        <p className="text-customBlue text-5xl">Kamran Khan Tessori</p>

        <h1 className="font-extrabold text-sky-400 text-5xl">
          Certified Cloud Applied Generative AI Engineer (GenEng)
        </h1>

        <h3 className="font-extrabold text-customBlue text-2xl">
          Earn up to $5,000 / month Now admissions are open in Hyderabad
        </h3>
      </div>
    </div>
  );
}
