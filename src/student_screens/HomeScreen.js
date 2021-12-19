import React from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';
const HomeScreen = () => {
    const navigate = useNavigate();
    return (
        <div className='h-screen bg-white'>
            <NavBar/>
            <p className='text-center'>
                This is the Homepage
            </p>
            <div className='flex justify-center space-x-5'>
                <button onClick={()=>navigate("/register")} className='p-5 bg-primary rounded-2xl'>Go to Registration page</button>
                <button onClick={()=>navigate("/login")} className='p-5 bg-primary rounded-2xl'>Go to Login page</button>
            </div>
            <p className="text-center">Refer the colors</p>
            <div className="p-10 flex flex-col space-y-5">
                <p className='bg-primary p-5 rounded-2xl'>bg-primary</p>
                <p className='bg-secondary p-5 rounded-2xl'>bg-secondary</p>
                <p className='bg-tertiary p-5 rounded-2xl'>bg-tertiary</p>
                <p className='bg-warning p-5 rounded-2xl'>bg-warning</p>
                <p className='bg-danger p-5 rounded-2xl'>bg-danger</p>
            </div>
        </div>
    )
}

export default HomeScreen
