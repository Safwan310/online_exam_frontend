import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar'

const Profile = () => {
    const { userType } = useParams();
    const userValue = userType.includes("admin")? "admin" : "users";
    const textValue = userValue === "admin" ? "Admin":"Student";
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.post(`https://exampal.herokuapp.com/${userValue}/profile`,{
            id:sessionStorage.getItem("userId")
        },{
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then((res)=>{
            setUser(res.data);
            setLoading(false);
            
        })
        .catch((err)=>alert(`Error at profile fetching: ${err}`));
    }, [userValue])
    console.log(user);
    return (
        <div className='h-screen bg-warning'>
            <NavBar />
            {loading ? 
            (
                <Loader/>
            ):
            (
                <div className='h-5/6 flex items-center justify-center'>
                    <div
                    className='bg-primary p-5 rounded-2xl space-y-5'
                    >
                        <div
                        className='flex justify-center'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className='text-3xl'>{textValue} Name: {user.name}</h1>
                            <h1 className='text-3xl'>{textValue} e-mail: {user.email}</h1>
                        </div>
                        <div
                        className='flex justify-center'
                        >
                            <button className='bg-tertiary rounded-2xl p-5'>
                                    Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile
