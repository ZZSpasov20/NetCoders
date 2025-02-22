import { nav } from "framer-motion/client";
import Home from "./../assets/home.png"
import OpenBook from "./../assets/openBook.png"
import Heart from "./../assets/heart.png"
import Profile from "./../assets/profile.png"
import SpoonAndForl from "./../assets/spoon-and-fork.png"
import { Link } from "react-router-dom";


export default function Nav() {
   return (<nav className="w-full h-[91px] bg-[#E3E3E3] flex  items-center relative gap-5 justify-evenly">

        <Link to="/app"> <img src={Home} alt="" className="h-8" /></Link>
      <Link to="/app/list"> <img src={OpenBook} alt="" className=" h-[38px]" /></Link> 

        <Link to="/chat" className="flex justify-center items-center"> 
            <div className="w-20 h-20 rounded-full bg-[#8BA046] flex justify-center items-center absolute -top-2/4 ">
            <img src={SpoonAndForl} alt="" className="h-8" />
            </div>
        </Link>
       
       <Link to="/app/favourite"><img src={Heart} alt="" className="h-8" /></Link> 
        <img src={Profile} alt="" className="h-8" />

   </nav>); 
}