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
        fetch(`http://localhost:5000/getprofile/${email}`,getToken)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='md:w-3/5 w-full bg-base-300 mx-auto p-3 rounded-lg'>
            <h1 className='text-4xl text-center capitalize'>Profile</h1> <hr />
            <div className='mt-5'>
                <h3 className='text-2xl md:ml-5 my-3'>{user?.displayName}</h3>
                <h3 className='text-[16px] md:ml-5 my-4'><strong>Email: </strong>{user?.email}</h3>
                <h3 className='text-[16px] md:ml-5 my-4'><strong>Phone: </strong>{data?.phone}</h3>
                <h3 className='text-[16px] md:ml-5 my-4'><strong>Education: </strong>{data?.education}</h3>
                <h3 className='text-[16px] md:ml-5 my-4'><strong>Location: </strong>{data?.location}</h3>
                <h3 className='text-[16px] md:ml-5 my-4'><strong>Facebook: </strong>{data?.facebook}</h3>
                <h3 className='text-[16px] md:ml-5 my-4'><strong>Linkdin: </strong>{data?.linkdin}</h3>
                <h3 className='text-[16px] md:ml-5 my-4'><strong>Instagram: </strong>{data?.instagram}</h3>
            </div>
            <Link to={`/dashboard/updateprofile/33`} className="btn btn-info mt-10 btn-sm">Update Profile</Link>

           
        </div>
    );
};

export default Profile;