import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    let errorsObj = { name: '', email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const navigate = useNavigate();
    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (name.length < 5) {
            errorObj.name = 'Name should be atleast 5 charaters in length';
            error = true;
        }
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        const emailregex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if (email === '') {
            errorObj.email = "Email is Required"
            error = true;
        }
        if (!emailregex.test(email)) {
            errorObj.email = "Email is invalid"
            error = true;
        }

        if (!regex.test(password) || password.length < 5) {
            errorObj.password = 'Password should be atleast 5 charaters in length and must have 1 number and 1 special character ';
            error = true;
        }
        if(password !== cPassword){
            errorObj.password = 'Entered passwords don\'t match';
            error = true;
        }
        setErrors(errorObj);
        if (!error) {
            axios.post("https://exampal.herokuapp.com/users/register",
            {
                "name":name,
                "email":email,
                "password":password,
                "isAdmin":false
            })
            .then(()=>{
                navigate("/login");
            })
            .catch((err)=>{
                alert(`Error at registration: ${err}`);
            })
        }
        else{
            console.log(errorObj)
        }
    }

    return (
        <div className='h-screen flex justify-center items-center bg-tertiary'>
            <div className='w-5/6 h-3/4 rounded-2xl shadow p-3 bg-primary'>
                <h1 className='text-2xl font-extrabold'>Sign Up</h1>
                <form onSubmit={onSignUp} className='p-5 space-y-5'>
                    <div>
                        <label>Name</label>
                        <div>
                            <input
                                type="text"
                                className="border border-gray-400 p-3 w-full rounded-2xl"
                                value={name} onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        {errors.name && <div className='text-red-600'>{errors.name}</div>}
                    </div>
                    <div>
                        <label>Email</label>
                        <div>
                            <input
                                type="text"
                                className="border border-gray-400 p-3 w-full rounded-2xl"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && <div className='text-red-600'>{errors.email}</div>}
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input
                                type="password"
                                className="border border-gray-400 p-3 w-full rounded-2xl"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <div className='text-red-600'>{errors.password}</div>}
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <div>
                            <input
                                type="password"
                                className="border border-gray-400 p-3 w-full rounded-2xl"
                                value={cPassword} onChange={(e) => setCPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <div className='text-red-600'>{errors.password}</div>}
                    </div>
                    <div className='flex justify-center p-5'>
                        <button
                            type="submit"
                            className='bg-warning text-white p-3 px-3 rounded-2xl'>
                            Sign Up</button>
                    </div>
                    <div className='flex justify-end'>
                        <Link to="/">
                            Already a member? Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration
