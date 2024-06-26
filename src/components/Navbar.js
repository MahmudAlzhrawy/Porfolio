import React, { useState } from "react";
import Logo from "../assets/images/Logo_2.png"
import { Link } from "react-router-dom";
import "../style/navbar.css"
function Navbar(){
    const[click,setClecked]=useState(false);
return(
    <>
    <div className="nav fixed z-50 top-0 shadow-lg shadow-blue-600 ">
        <div className="Logo flex" >
            <span className="bg-blue-300 p-1  rounded-full"><img className="w-14 h-14 rounded-full" src={Logo} alt="Not Found" /></span>
            <span className="text-darkblue font-bold animate-bounce  items-center mt-3 ml-3 text-2xl">Portfolio</span>
        </div>
        <div className="Linkes min-[1060px]:block ">
            <Link className="lin" to="/">Home</Link>
            <Link className="lin" to="/about">About</Link>
            <Link className="lin" to="/worksPage">Work</Link>
            <Link className="lin" to="/Contact">Contact</Link>
        </div>
        <div className="group w-8 mr-3  max-[1061px]:block items-center  " onClick={()=>{
        setClecked(ev=>!ev);
        }} >
        <span className="items-center pt-3 flex gap-2 flex-wrap justify-end">
            {click?<>
            <span className="spn bg-creamy w-full h-1 items-center transform rotate-45 duration-500  translate-y-2.5" ></span>
            <span  className="spn bg-creamy w-full h-1 items-center transform  -rotate-45 duration-500  "></span>
            </>:<>
            <span className="spn h-0.5 w-full bg-creamy items-center"></span>
            <span  className="spn h-0.5 w-3/5 bg-creamy items-center flex  group-hover:w-full transform-gpu duration-500 "></span>
            <span  className="spn h-0.5 bg-creamy w-full items-center"></span>
            </>
            }
        </span>
    </div>
    {click&&
    <div className="toggel w-64  bg-blue-200 rounded-md   absolute right-3 top-16  ">
        <ul className= " mx-auto">
            <li><Link  className="tlist " to="/">Home</Link></li>
            <li><Link className=" tlist " to="/about">About</Link></li>
            <li><Link className=" tlist " to="/worksPage">Work</Link></li>
            <li><Link className=" tlist border-none " to="/Contact">Contact</Link></li> 
        </ul>
    </div>
    }
    </div>
    </>
)

}
export default Navbar;