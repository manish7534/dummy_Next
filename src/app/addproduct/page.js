"use client"
import { useState } from "react";
import "../style.css"
import Link from "next/link";

export default function Page(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [color,setColor] = useState("");
    const [company,setCompany] = useState("");
    const [category,setCategory] = useState(""); 
    const addProduct= async ()=>{
        console.log(name,price,color,company,category);
        let result= await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,category,company})
        });
        result = await result.json();
        if(result.success){
            alert("New product added")
        }
    }
    return(
        <div>
            <h1>add project page</h1>
            
            <input type="text" placeholder="enter product name" className="input" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="enter product price" className="input" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <input type="text" placeholder="enter product color" className="input" value={color} onChange={(e)=>setColor(e.target.value)}/>
            <input type="text" placeholder="enter product compay" className="input" value={company} onChange={(e)=>setCompany(e.target.value)}/>
            <input type="text" placeholder="enter product category" className="input" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            <button onClick={addProduct} className="input" style={{backgroundColor:'skyblue', cursor:'pointer'}}>Add Product</button>

            <Link href="/" style={{backgroundColor:'red'}}>Go to home page</Link>
        </div>
    )
}