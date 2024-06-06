async function getUser(id){
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}
export default async function Page({params}){
    // console.log(params);
    const user = await getUser(params.userid)
    console.log(user);
    return(
        <div>
            <h1>user details</h1>
            <h3>Name: {user.name}</h3>
            <h3>age: {user.age}</h3>
            <h3>email: {user.email}</h3>
        </div>
    )
}