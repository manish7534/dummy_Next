"use client"
import { useState } from "react"
import "./../style.css"
export default function Page(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    const addUser= async()=>{
        let response = await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        console.log(response);
        if(response.success){
            alert("new user added");
        }else{
            alert("some data is missing please enter correct data")
        }
    }
    return(
        <div className="add-user">
         <h1>add user</h1>
         <input type="text" placeholder="enter name" value={name} className="input-field" onChange={(e)=>setName(e.target.value)}/>
         <input type="text" placeholder="enter age" value={age} className="input-field" onChange={(e)=>setAge(e.target.value)}/>
         <input type="text" placeholder="enter email" value={email} className="input-field" onChange={(e)=>setEmail(e.target.value)}/>
         <button onClick={addUser} className="btn">add user</button>

        </div>
    )
}