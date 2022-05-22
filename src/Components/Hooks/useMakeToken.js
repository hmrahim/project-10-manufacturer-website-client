import { useState } from "react";

const useMakeToken = (user) => {
    const [token,setToken] = useState("")
    const email = user?.user.email
    if(user){
        const url = `http://localhost:5000/users/${email}`
    }

return [token,setToken]
};

export default useMakeToken