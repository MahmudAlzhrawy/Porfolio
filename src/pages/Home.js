import React, { useState, useEffect } from "react";
import Logo from "../assets/images/Logo_2.png";
import "../style/home.css";
import { Link } from "react-router-dom";
import about from "../assets/images/about.jpeg";
import {collection, getDocs} from "firebase/firestore"
import { db } from "../firebase-config";

function Home() {
    const conect= collection(db,"Visiteors") 
    const[opinion,setOpinion]=useState([]);
    const getOpinions=async()=>{
        const data=await getDocs(conect);
        setOpinion(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }
    const arr = ["Front-End Developer"];
    const [displayText, setDisplayText] = useState("");
    let index = 0;
    let forward = true;
    const speed = 150;

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayText(arr[0].slice(0, index));
            if (forward) {
                index++;
                if (index > arr[0].length) {
                    forward = false;
                    setTimeout(() => {
                        index--;
                    }, 1000);
                }
            } else {
                index--;
                if (index === 0) {
                    forward = true;
                }
            }
        }, speed);
        return () => clearInterval(interval);
    }, []);
useEffect(()=>{
getOpinions();
},[])
    return (
        <div className="main mt-16">
            <div className="content  ">
                <div className="left relative ">
                    <div className="translate-x-16 w-full absolute top-40">
                        <p className="text-creamy font-medium text-4xl font-mono">My Name Is</p>
                        <h2 className="text-3xl text-creamy font-serif w-80 font-bold">Mahmud AL-Zhrawy</h2>
                        <div className="Text mt-2 bg-creamy rounded-md h-14 w-96">
                            <p className="text-3xl ml-2 font-serif text-darkblue font-semibold py-2">{displayText}</p>
                        </div>
                    </div>
                </div>
                <div className="right ">
                    <img className=" max-[850px]:invisible mx-auto rounded-full translate-x-96" src={Logo} alt="Not Found" />
                </div>
            </div>
            <div className="container mt-3 mx-auto mb-6 ">
                <div className="about shadow-lg h-full shadow-darkblue hover:scale-95 duration-700 ease-in-out bg-blue-200 p-8 relative my-10">
                    <h1 className="text-5xl text-gray-100 text-center font-serif font-extrabold">About</h1>
                    <div className="aboutContent flex  items-center w-4/5 ml-3 max-[450px]:block">
                        <img className="w-48 h-48" src={about} alt="Not Found"/>
                        <p className="flex items-center ml-2 font-mono text-cyan-700 font-bold max-[1027px]:text-wrap max-[1027px]:text-xl text-2xl">Hi i am Mahmud Nagi, a 3rd year student at faculty of Computers and Information in Assiut University, and studying at Computer science department. While studying at the faculty, I am also studying Front-end track.To read more about me click</p>
                    </div>
                    <Link to="/About" className="btn absolute right-0 mr-5 bottom-0.5">SHOW MORE ABOUT</Link>
                </div>
                <div className="work shadow-lg h-full shadow-darkblue hover:scale-95 duration-700 ease-in-out bg-blue-200 p-8 relative my-10">
                    <h1 className="text-5xl text-gray-100 text-center font-serif font-extrabold">My Work</h1>
                    <div className="workContent w-4/5 flex  items-center mr-3 max-[450px]:block">
                        <p className="flex items-center  font-mono font-bold max-[1027px]:text-wrap max-[1027px]:text-xl  text-2xl">Here we will show our work and the last updates about my work. Without speaking a lot, come to see what I have already done.</p>
                        <img className="w-48 h-48" src={Logo} alt="Not Found"/>
                    </div>
                    <Link to="/WorksPage" className="btn absolute right-0 bottom-0.5 mr-5">SHOW MY WORK</Link>
                </div>
            </div>
            <div className="container mx-auto bg-blue-500 ">
                <div className="opinions h-96 overflow-scroll w-5/6 mx-auto bg-white  " >
                    <h2 className="text-5xl font-serif font-extrabold text-blue-950 text-center my-5">pepole Opinions</h2>
                    {opinion.length > 0?<>
                    { opinion.map((opin)=>{
                        return (
                        <div key={opin.id} className="opin relative w-1/2 mx-auto p-6 mb-8 rounded-lg bg-blue-400">
                            <p className=" border rounded-lg absolute top-1 left-0 bg-creamy text-blue-900 font-bold  w-28 pl-3.5">{opin.userName}</p>
                            <p className="mt-4 text-white font-bold font-serif">{opin.userMessage}</p>
                        </div>
                    )
                    })
                    }
                    </>:
                    <h2 className="text-5xl font-serif font-extrabold text-blue-700 text-center my-5" >the opinion List is empity</h2>
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
