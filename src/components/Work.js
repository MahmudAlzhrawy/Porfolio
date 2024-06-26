import React from "react";
import rest from"../assets/images/resto.jpeg";
function Work(props){
return(

    <div className="Main">
    <div className="container ">
        <div className="projects">
            <div className="project">
                <p className="title text-center font-semibild  text-xl text-creamy">{props.project.title}</p>
                <img className="h-48 w-full" src={require(`../assets/images/${props.project.image}`)} alt="NOt FOUND"/>
                <h2 className=" text-darkblue font-serif ">Tools</h2>
                <div className="w-full">
                    {
                        props.project.Techno.map((element, index) => (
                        <span  className=" hover:bg-slate-300 duration-700 ease-in-out ml-1 mb-1 rounded-md px-4 py-1 bg-creamy inline-block" key={index}>{element}</span>
                    ))
                    }
                </div>
            </div>
        </div>
    </div>
    
    </div>
)


}
export default Work;