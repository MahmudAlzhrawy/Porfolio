import React from "react";
import "../style/About.css"
import edu from "../assets/images/education.jpeg"
import personal from"../assets/images/person1.jpg"
function About(){
    return(<div className="main mt-20 ">
            <div className="back m-auto  ">
                <img className=" animate-pulse rounded-full h-72 w-72 items-center  mb-10 mx-auto  " src={personal} alt="Not Found"/>
                <p  className="text-center p-2 hover:bg-opacity-20 transform duration-700 ease-in-out bg-opacity-10 mx-auto bg-black border rounded-md w-64 text-3xl text-darkblue font-blod font-serif mb-10 ">Mahmud Nagi</p>
            </div>
            <div className="Section  mt-16">
            <div className="edu ">
                <h2 className="block h2">Education</h2>
                <div className="cont flex">
                <ul className=" ul mx-auto block  w-full ">
                    <li className="list"> <span className="sp"></span> Bachelor of Computer Science - Assiut University</li>
                    <li className="list"> <span className="sp"></span> Graduation Date:  Expected in June 2025</li>
                    <li className="list"> <span className="sp"></span> Study computer science with a focus on software development.</li>
                </ul>
                <div className=" mr-14">
                    <img className=" shadow-lg animate-pulse shadow-creamy rounded-full h-72 w-96" src={edu} alt="Not Found"/>
                </div>
                </div>
            </div>
            <div className="edu">
                <h2 className="h2">Skills</h2>
                <ul className="ul mx-auto block  w-full">
                    <li className="lis"><span className="sp"></span> Programming in basics of C++, java and database management using SQL.</li>
                    <li className="lis"><span className="sp"></span> Create and develop responsive websites.</li>
                    <li className="lis"><span className="sp"></span> Design and develop user interfaces using HTML, CSS and JavaScript</li>
                    <li className="lis"><span className="sp"></span> Use practical frameworks such as Vue.js, Tailwind CSS and learning react ,redux toolkit, and have an experience in dealing with firebase</li>
                    <li className="lis"><span className="sp"></span> Good skills in using software development tools such as Git and Visual Studio Code.</li>
                    <li className="lis"><span className="sp"></span> Problem solving and competitive programming.</li>
                    <li className="lis"><span className="sp"></span> Work within development teams and effective collaboration.</li>
                    <li className="lis"><span className="sp"></span> Languages: Arabic (my mother tongue), English (intermediate level).</li>
                </ul>
            </div>
            </div>
    </div>
    )
}
export default About;