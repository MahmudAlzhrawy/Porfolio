import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { db } from "../firebase-config";
import {collection,addDoc} from "firebase/firestore"
import Swal from 'sweetalert2';
import "../style/Contact.css"
function Contact(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const[name,setName]=useState();
    const[message,setMessage]=useState();
    const addacount=async()=>{
            await addDoc(collection(db,"Visiteors"),{userName:name ,userMessage:message})
        }
    
    return(
    <div className="main mt-20">
        <div className="container p-6 mx-auto w-full bg-cyan-100">
            <div className="contc w-4/5 mx-auto bg-blue-300 rounded-lg shadow-lg shadow-blue-700">
                <h2 className="h2 ">
                    Contact Methods
                </h2>
                <div className="w-80 mx-auto">
                <p className="prg"><span className="spco">Phone Numbers : </span>+201149564002<br></br>+201123737836</p>
                <p className="prg"><span className="spco"><FontAwesomeIcon className="ico" icon={faEnvelope}/> </span>mahmudnagi192003@gmail.com</p>
                <p className="prg"><span className="spco"><FontAwesomeIcon className="ico" icon={faFacebook} /> </span><a href="https://www.facebook.com/alzahrawi.mahmoud/about">Mahmud Alzhrawi</a></p>
                <p className="prg"><span className="spco"><FontAwesomeIcon className="ico" icon={faLinkedin} /> </span><a href="https://www.linkedin.com/in/mahmud-al-zhrawy-995401263/">Mahmud_ALZhrawy</a></p>
                <p className="prg"><span className="spco"><FontAwesomeIcon className="ico" icon={faInstagram} /> </span><a href="https://www.instagram.com/dev_alzhrawy/">dev_alzhrawy</a></p>
                </div>
            </div>
            <div className="frm w-4/5 mx-auto pb-4 bg-blue-300 rounded-lg shadow-lg shadow-blue-700">
            <h4 className=" border-b border-white  text-xl font-serif font-extrabold text-creamy text-center my-5">Your opinion matters to us! Don't hesitate to share your thoughts and feedback</h4>
                <div className="mx-auto w-80 shadow-md shadow-blue-400  ">
                    <form onSubmit={(event)=>{ event.preventDefault()
                    addacount();
                    Toast.fire({
                        icon: "success",
                        title: "Completed Order"
                    });
                    setName('');
                    setMessage('');
                    }} >
                    <label className="mr-3 text-creamy text-xl" >Your Name</label>
                    <input value={name} className="mb-5 w-80 h-10 border-2 rounded-md   hover:border-blue-500"  type="text" onChange={(ev)=>{
                        setName(ev.target.value)
                    
                    }} />
                    <div className="pb-4">              
                    <textarea value={message} onChange={(ev)=>{
                        setMessage(ev.target.value)
                    
                    }} className="rounded-md text-center "  cols={40} rows={10} placeholder="Tell us what's on your mind"></textarea>
                    </div>
                    <button className="btn -mt-1.5" type="submit" >Supmit</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
)
}
export default Contact;