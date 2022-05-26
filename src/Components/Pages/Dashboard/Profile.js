import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import atuh from '../../../firebase.init';
import getToken from '../../Hooks/getToken';

const Profile = () => {
    const [data,setData] = useState([])
    const [user] = useAuthState(atuh)
    const email = user.email
    useEffect(()=> {
        fetch(`https://protected-peak-92782.herokuapp.com/getprofile/${email}`,getToken)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='md:w-3/5 w-full bg-base-100 mx-auto p-3 rounded-lg pb-20 md:pb-0'>
            <h1 className='text-4xl text-center capitalize'>Profile</h1> <hr />
            <div className='mt-5 flex flex-col justify-center items-center'>
                <h3 className='text-3xl md:ml-5 my-3 uppercase '>{user?.displayName}</h3>
                <h3 className='text-[16px] md:ml-5 my-4 capitalize'><strong>Email: </strong>{user?.email}</h3>
                <h3 className='text-[16px] md:ml-5 my-4 capitalize'><strong>Phone: </strong>{data?.phone ? data.phone : "Set phone"}</h3>
                <h3 className='text-[16px] md:ml-5 my-4 capitalize'><strong>Education: </strong>{data?.education ? data.education : "Update education"}</h3>
                <h3 className='text-[16px] md:ml-5 my-4 capitalize'><strong>Location: </strong>{data?.location ? data.location : "Set location"}</h3>
                <h3 className='text-[16px] md:ml-5 my-4 capitalize'><strong>Facebook: </strong>{data?.facebook ? data.facebook : "Set facebook profile"}</h3>
                <h3 className='text-[16px] md:ml-5 my-4 capitalize'><strong>Linkdin: </strong>{data?.linkdin ? data.linkdin : "Set linkdin profile"}</h3>
                <h3 className='text-[16px] md:ml-5 my-4 capitalize'><strong>Instagram: </strong>{data?.instagram ? data.instagram : "Set instagram profile"}</h3>
            </div>
            <Link to={`/dashboard/updateprofile`} className="btn btn-info mt-10 btn-sm my-10">Update Profile</Link>

           
        </div>
    );
};

export default Profile;