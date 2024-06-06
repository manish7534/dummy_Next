"use client"
export default function DeleteUser(props){
    const userId= props.id;
    console.log(userId);
    const deleteuser = async()=>{
        let result = await fetch("http://localhost:3000/api/users/"+userId, {
            method:"delete"
        });
        result =await result.json();
        if(result.success){
            alert("user is delete")
        }
    }
    return(
        <button onClick={deleteuser}>delete</button>
    )
}