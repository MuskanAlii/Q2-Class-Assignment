import Link from "next/link"

export default function Header() {
  return (
    <div className="w-full h-20 bg-customBlue flex items-center justify-evenly " >

     <div className="mt-20 mr-8">
        <img className= " h-28" src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" alt="logo" />
     </div>

      <h1 className="text-lightBlueVariant font-extrabold text-lg font-sans">
        Tuition Free Education Program on Latest Technologies
      </h1>

      <ul className=" flex space-x-10 text-white font-sans">
      <Link href="/"> <li>Home</li> </Link>
      <Link href="/apply"> <li>Apply</li> </Link> 
      <Link href="/jobs"> <li>Jobs</li> </Link> 
      <Link href="/result"> <li>Result</li> </Link>  
      <Link href="/course"> <li>Courses</li> </Link>
      </ul>
    </div>
  );
}
