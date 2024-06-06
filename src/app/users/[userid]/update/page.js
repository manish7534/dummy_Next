"use client"
import { useEffect, useState } from "react";
// import "././style.css"
import "../../../style.css"
export default function Page({params}){
    let id = params.userid;
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

   useEffect(()=>{
   getUserDetails();
   },[]);

   const getUserDetails = async ()=>{
    let data = await fetch("http://localhost:3000/api/users/"+id);
    data =await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
    
   }
   const updateUser=async ()=>{
    let result = await fetch("http://localhost:3000/api/users/" +id, {
        method:"PUT",
        body:JSON.stringify({name,age,email})
    });
    result= await result.json();
    console.log(result);
    if(result.success){
        alert("user information updated successfully");
   } else {
    alert("please enter valid data");
   }
}

    return(
        <div className="add-user">
         <h1>add user</h1>
         <input type="text" placeholder="enter name" value={name} className="input-field" onChange={(e)=>setName(e.target.value)}/>
         <input type="text" placeholder="enter age" value={age} className="input-field" onChange={(e)=>setAge(e.target.value)}/>
         <input type="text" placeholder="enter email" value={email} className="input-field" onChange={(e)=>setEmail(e.target.value)}/>
         <button  className="btn" onClick={updateUser}>update user</button>

        </div>
    )
}