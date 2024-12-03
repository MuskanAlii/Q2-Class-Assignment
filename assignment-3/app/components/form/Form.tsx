import Link from "next/link";

export default function Form() {
  return (
    <div className="grid place-content-center ">
      <div className="bg-slate-600 w-80">
        <form className="">
          <label htmlFor="email" className="text-slate-200 text-sm pl-3 font-sans">
            Email:
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
            className="text-slate-100 border-2 focus:outline-none border-customRed border-solid bg-slate-600 rounded-full w-80 h-10 pl-3 mb-6"
          />

          <br />

          <label htmlFor="password" className="text-slate-200 text-sm pl-3 font-sans">
            Password:
          </label>
          <br />
          <input
            type="password"
            placeholder="password"
            className=" text-slate-100 border-2 focus:outline-none border-customRed border-solid bg-slate-600 rounded-full w-80 h-10 pl-3 "
          />
          <br />

         <Link href="/"><button
            type="submit"
            className="bg-customRed w-80 h-10 rounded-full mt-8 text-slate-200 font-semibold font-sans">
            Submit
          </button></Link> 

        </form>
      </div>
    </div>
  );
}
