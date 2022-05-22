const postToken = {
    method:"post",
    headers:{
        authorization:`bearer ${localStorage.getItem("token")}`
    }
}

export default postToken