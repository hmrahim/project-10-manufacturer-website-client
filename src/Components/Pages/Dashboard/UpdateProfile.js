import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import atuh from "../../../firebase.init";
import getToken from "../../Hooks/getToken";
import Loading from "./Loading";
const UpdateProfile = () => {
    const [user] = useAuthState(atuh)
    const email = user?.email

 




    const [loading,setLoading] = useState(false)
    const [phone,setPhone] = useState("")
    const [education,setEducation] = useState("")
    const [location,setLocation] = useState("")
    const [facebook,setFacebook] = useState("")
    const [linkdin,setLinkdin] = useState("")
    const [instagram,setInstagram] = useState("")
    const [phoneError,setPhoneError] = useState("")
    const [eduerror,setEduError] = useState("")
    const [locserror,setLocsError] = useState("")
    const [fberror,setFbError] = useState("")
    const [inserror,setInsError] = useState("")
    const [lnerror,setLnError] = useState("")
    const rediect = useNavigate()

    useEffect(()=> {
        fetch(`http://localhost:5000/getprofile/${email}`,getToken)
        .then(res=>res.json())
        .then(data=>{
            setPhone(data.phone)
            setEducation(data.education)
            setLocation(data.location)
            setFacebook(data.facebook)
            setInstagram(data.instagram)
            setLinkdin(data.linkdin)
            
        })
    },[])

  
//    console.log(data);
//    setEducation(data?.education)
//    setLocation(data?.location)
//    setFacebook(data?.facebook)
//    setInstagram(data?.instagram)
//    setLinkdin(data?.linkdin)
  
    
    const submit =(e)=> {
        e.preventDefault()
        setLoading(true)
        if(!phone){
            setPhoneError("Phone is required")

        }else if(!location){
            setLocsError("Location is required")
        }else if(!education){
            setEduError("Education is required")
        }else if(!facebook){
            setFbError("Facebook is required")
        }else if(!instagram){
            setInsError("Insrtagram is required")
        }else if(!linkdin){
            setLnError("Linkdin is required")
        }else{
            setPhoneError(" ")
            setEduError(" ")
            setLocsError(" ")
            setFbError(" ")
            setInsError(" ")
            setLnError(" ")
            const obj = {
                phone:phone,
                location:location,
                education:education,
                facebook:facebook,
                instagram:instagram,
                linkdin:linkdin
            }
            
            setLoading(true)

            const email = user?.email
            fetch(`http://localhost:5000/updateprofile/${email}`,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json",
                    authorization:`bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify(obj)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast.success("Profile updated succesfully")
               return rediect("/dashboard/profile")
                
            })
            setLoading(false)
        }


    }
  
  return (
    <div className="md:w-3/5 w-full bg-base-300 mx-auto p-3 rounded-lg ">
      <h1 className="text-4xl text-center capitalize my-3">update Profile</h1>
      <hr />
      <form onSubmit={submit} action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
            name="email"
            onChange={(e)=>setPhone(e.target.value)}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              value={user?.email}
              disabled

            />
          
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
            name="name"
            onChange={(e)=>setPhone(e.target.value)}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              value={user?.displayName}
              disabled

            />
          
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Phone</label>
            <input
            name="phone"
            onChange={(e)=>setPhone(e.target.value)}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              value={phone}

            />
            <p className="text-red-500">{phoneError}</p> <br />
            
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Education</label>
            <textarea 
            class="textarea textarea-bordered"
            name="education"
            onChange={(e)=>setEducation(e.target.value)}
              type="text"
              placeholder="Type here"
              value={education}
              
             >

            </textarea>
             <p className="text-red-500">{eduerror}</p> <br />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Location</label>
            <input
            name="location"
            onChange={(e)=>setLocation(e.target.value)}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              value={location}
            />
             <p className="text-red-500">{locserror}</p> <br />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Facebook</label>
            <input
            name="facebook"
            onChange={(e)=>setFacebook(e.target.value)}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              value={facebook}
            />
             <p className="text-red-500">{fberror}</p> <br />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Linkdin</label>
            <input
            name="linkdin"
            onChange={(e)=>setLinkdin(e.target.value)}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              value={linkdin}
            />
             <p className="text-red-500">{inserror}</p> <br />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Instagram</label>
            <input
            name="instagram"
            onChange={(e)=>setInstagram(e.target.value)}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              value={instagram}
            />
             <p className="text-red-500">{inserror}</p> <br />
          </div>
        </div>
        
        <button className="btn btn-primary my-4"> {loading ? "Updating..." : "Update profile"} </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
