import DeleteUser from '@/util/DeleteUser';
import './../style.css'
import Link from "next/link";

async function getUsers(){
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}
export default async function Page(){
    const users = await getUsers();
    console.log(users);
    return(
        <div>
            <h1>user list</h1>
            {
                users.map((item)=>(
                    <div className="user-item">
                       <span> <Link key={item.id} href={`users/${item.id}`}>{item.name}</Link></span>
                        <span key={item.id}><Link href={`users/${item.id}/update`}>Edit</Link></span>
                        <DeleteUser id={item.id}/>
                        </div>
                ))
            }
        </div>
    )
}