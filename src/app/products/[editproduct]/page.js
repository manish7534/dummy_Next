"use client"
import { useEffect, useState } from "react";
import "../../style.css"
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
    

    useEffect(() => {
        getProductDetail()
    }, []);

    const getProductDetail = async () => {
        let productId = props.params.editproduct;
        let productData = await fetch("http://localhost:3000/api/products/"+productId);
        productData = await productData.json();
        console.log(productData);
        if(productData.success){
            let result = productData.result;
            setName(result.name)
            setPrice(result.price)
            setColor(result.color);
            setCompany(result.company);
            setCategory(result.category);
        }
    }

    const updateProduct = async()=>{
        let productId = props.params.editproduct;
        let data = await fetch("http://localhost:3000/api/products/"+productId,{
            method:"PUT",
            body:JSON.stringify({name,price,color,category,company})
        });
        data = await data.json();
        if(data.result){
            alert("product has been updated")
        }

    }

    return (
        <div>
            <h1>Edit project</h1>

            <input type="text" placeholder="enter product name" className="input" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="enter product price" className="input" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="enter product color" className="input" value={color} onChange={(e) => setColor(e.target.value)} />
            <input type="text" placeholder="enter product compay" className="input" value={company} onChange={(e) => setCompany(e.target.value)} />
            <input type="text" placeholder="enter product category" className="input" value={category} onChange={(e) => setCategory(e.target.value)} />
            <button onClick={updateProduct} className="input" style={{ backgroundColor: 'skyblue', cursor: 'pointer' }}>Edit Product</button>

            <Link href="/" style={{ backgroundColor: 'red' }}>Go to home page</Link>
        </div>
    )
}