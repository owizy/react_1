import { useState } from "react"

export default function  Form (){
    const[FormData,SetFormData]=useState({
        username: "",
        lastname:"",
        email:"",
        graduate:false,
        })
    function Handlechange(event){
       
        SetFormData((e)=>{
            const{name,value,type,checked}=event.target
            return {
                ...e,
                [name] : type === "checkbox" ? checked : value

         }
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(FormData)
      
      }
    return(
    <form onSubmit={handleSubmit}>
            <input placeholder="username" name="username" type="text"
            onChange={Handlechange} value={FormData.username}/>
       <input placeholder="lastname" name="lastname" type="text"
            onChange={Handlechange} value={FormData.lastname}/>
               <input placeholder="email" name="email" type="email"
            onChange={Handlechange} value={FormData.email}/>
           <label>
                             Are you a graduate?
                             <input type="checkbox" name="graduate" value={FormData.graduate} onChange={Handlechange}/>
                        </label>
                        <button type="submit">Submit</button>
        </form>
    )
    }