import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";
function Footer(){
return(<div className="">
<div className="main max-[620px]:grid-cols-2 max-[470px]:grid-cols-1  grid grid-cols-3 bg-blue-700 bg-opacity-20 mt-3  shadow-lg shadow-black py-8 ">
<div className="conect ml-3 ">
    <h2 className="h2">Contact</h2>
    <ul>
        <li className="li"> <span>Name :</span> Mahmud Nagi Mahmud</li>
        <li className="li"> <span>Phone :</span> +201149564002</li>
        <li className="li"> <span>Address :</span> Egypt ,Asyut,Qussia</li>
        <li className="li"> <span>Email :</span><a href="mahmudnagi192003@gmail.com">@MahmudNagi</a></li>
    </ul>
</div>
<div className="skills ">
    <h2 className="h2">Skills</h2>
    <ul>
        <li className="li">Html</li>
        <li className="li">CSS</li>
        <li className="li">JS</li>
        <li className="li">React</li>
        <li className="li">Redux Toolkit</li>
        <li className="li">Tailwind Css</li>
        <li className="li">Firebase</li>
    </ul>
</div>
<div className="pages ">
    <h2 className="h2">Pages</h2>
    <ul>
        <li className="li"><Link to="/">Home</Link></li>
        <li className="li"><Link to="/about">About</Link></li>
        <li className="li"><Link to="WorksPage">Work</Link></li>
    </ul>
</div>

</div>
<div className="py-2 px-3 bg-blue-500  font-serif text-center text-creamy ">All Rights are Save by Zhrawy&copy;2022 </div>
</div>
)
}
export default Footer;