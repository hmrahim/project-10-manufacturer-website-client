import { useState } from "react";

const useMakeToken = (user) => {
    const [token,setToken] = useState("")
    const email = user?.user.email
    if(user){
        const url = `https://protected-peak-92782.herokuapp.com/users/${email}`
    }

return [token,setToken]
};

export default useMakeToken