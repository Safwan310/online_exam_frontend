import React from 'react'
import { useState } from 'react';
const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorsObj = { name: '', email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);

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
        setErrors(errorObj);
        if (!error) {
            console.log('form submit');
        }
    }

    return (
        <div className='flex justify-center my-20 bg-white'>
            <div className='w-1/3 shadow p-3 bg-primary rounded-2xl'>
                <h1 className='text-2xl font-extrabold'>Sign Up</h1>
                <form onSubmit={onSignUp}>
                    <div>
                        <label>Name</label>
                        <div>
                            <input
                                type="text"
                                className="border border-gray-600 p-1 w-full"
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
                                className="border border-gray-600 p-1 w-full"
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
                                className="border border-gray-600 p-1 w-full"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <div className='text-red-600'>{errors.password}</div>}
                    </div>
                    <div className='my-3'>
                        <button
                            type="submit"
                            className='bg-warning text-white px-3'>
                            Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration
