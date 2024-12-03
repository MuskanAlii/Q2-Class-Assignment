export default function Footer(){
    return(
       <div className="w-full bg-slate-600 text-white h-60 flex justify-evenly items-center">
        <div className="space-y-4 w-80">
        <h2 className="font-bold text-xl">
            Menu
        </h2>
        <hr />
        <ul className="space-y-2">
            
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
        </div>
        <div className="space-y-4 w-80">
            <h2 className="font-bold text-xl">
                Contact
            </h2>
            <hr />
            <ul className="space-y-2">
                <li>Phone</li>  
                <li>Address</li>
                <li>Email</li>
                <li>Social Media</li>
            </ul>
        </div>
       </div>
    )
}