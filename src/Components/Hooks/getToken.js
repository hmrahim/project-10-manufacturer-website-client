const getToken = {
    method:"get",
    headers:{
        authorization:`bearer ${localStorage.getItem("token")}`
    }
}

export default getToken