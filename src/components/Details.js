import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import photo from "../assets/images/Logo.png"
import { fetchdata } from "../reduxToolKit/Slices/projectsSlice"; // تأكد من استيراد دالة الجلب
function Details(props){
    const projects =useSelector(state=>state.projects)
    const dispatch =useDispatch();
    const[Id,setId]=useState(props.id);
    useEffect(()=>{
        if (projects.length === 0) {
            dispatch(fetchdata());
        }
        }, []);
    const project= projects.find((project)=>project.id === Id);
    if (!project) {
        return <div>Loading...</div>;
    }
    
    return(
        <div className="container h-96 my-20 mx-auto rounded-sm grid grid-cols-2 shadow-lg shadow-darkblue ">
            <div className="img  bg-creamy col-span-1 w-full h-full ">
            <img className="mx-auto  rounded-lg  h-96 w-full " src={require(`../assets/images/${project.image}`)} alt="NOT FOUND" />
            </div> 
            <div className="con text-center bg-blue-400 px-4 py-2 w-full relative ">
                <h1 className="font-bold text-2xl"> {project.title}</h1>
                <p className="text-xl font-sans flex-wrap ml-2 text-creamy  " >{project.description}</p>
                <a className="btn absolute left-72 w-20" href={project.Url}>GO</a>
                <div className="absolute bottom-3 left-1/5">
                {
                        project.Techno.map((element, index) => (
                        <span   className="  hover:bg-slate-200 duration-700 ease-in-out ml-1 mb-1 rounded-md px-6 py-1 bg-creamy inline-block" key={index}>{element}</span>
                    ))
                    }
                </div>
            
            </div>     
        </div>

    )
}
export default Details;