import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-slate-600 text-white h-20 flex items-center justify-evenly ">
      <ul className="flex space-x-36 font-semibold">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
      </ul>

      <div>
        <Link href="/login">
          <button className="bg-customRed w-24 h-10 rounded-full mr-6 font-bold">
            Log In
          </button>
        </Link>

        <Link href="/signup">
          <button className="bg-customRed w-24 h-10 rounded-full font-bold">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
