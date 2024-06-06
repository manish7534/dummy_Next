import DeleteProduct from "@/lib/DeleteProduct";
import { Product } from "@/lib/model/product";
import Link from "next/link";

const getProducts=async()=>{
    let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
    data = await data.json();
    console.log(data);
   return data.result;
}
export default async function Page(){
    const Prdct = await getProducts();
    return(
        <div>
            <h1>Product list</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Category</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        Prdct.map((item)=>(<tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.company}</td>
                        <td>{item.color}</td>
                        <td>{item.category}</td>
                        <td><Link href={"products/"+item._id}>Edit</Link> </td>
                        <td><DeleteProduct id={item._id}/> </td>
                        </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )


}