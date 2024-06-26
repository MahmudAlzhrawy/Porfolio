import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {fetchdata} from "../reduxToolKit/Slices/projectsSlice"
import Work from "../components/Work";
function Workpage(){
const projects=useSelector((state)=>state.projects)
const dispatch =useDispatch();
useEffect(()=>{
    dispatch(fetchdata());
},[])
    return(
    <div className=" mt-20 Workbage container m-auto grid max-[1024px]:gap-2 max-[1022px]:grid-cols-2 max-[620px]:grid-cols-1 max-[620px]:w-80 bg-creamy gap-4 grid-cols-3">
        {
            !projects.length > 0 ? <span>dd</span>:
        projects.map((project)=>{
                return(
                <div className="bg-blue-300 h-96   w-full p-5 relative rounded-md  hover:scale-105 shadow-md transform-gpu duration-700 ease-in-out shadow-darkblue" key={project.id} >
                
                <Work key={project.id} project={project}  />
                <Link className="btn absolute left-1 top-1" to={`/project/${project.id}`} >Show More</Link>
                </div>
                
            )
        })
        }
    </div>)
}
export default Workpage;