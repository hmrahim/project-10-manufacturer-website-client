import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import getToken from "./getToken"

const useAdmin = ()=> {
    const [admin,setAdmin] = useState([])
    const [user,loading,error] = useAuthState(auth)
  
   
  useEffect(()=> {
    fetch(`http://localhost:5000/users/${user.email}`,getToken)
    .then(res=>res.json())
    .then(data => setAdmin(data.data))
  },[])

return [admin,setAdmin]
}

export default useAdmin