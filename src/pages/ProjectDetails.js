import React from "react";
import Details from "../components/Details";
import { useParams } from "react-router-dom";
function ProjectDetails(){
    const params=useParams();
return(
    <div>
        <Details id ={params.projectId}/>
    </div>
)
}
export default ProjectDetails;