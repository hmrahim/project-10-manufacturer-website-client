import { useEffect, useState } from "react"


const useMakeUser = (user) => {
    const [token,setToken] = useState("")

    // useEffect(()=> {
    

    // },[token])
    const email = user?.user.email
    const url = `https://protected-peak-92782.herokuapp.com/users/${email}`
    if(user){
        fetch(url,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify({email:user?.user.email,name:user?.user.displayName})
        })
        .then(res => res.json())
        .then(data => localStorage.setItem("token",data.token))

    }


return [token,setToken]
}

export default useMakeUser