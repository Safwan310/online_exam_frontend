import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { bearerTokenState } from '../atoms/bearerTokenState'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tokenState, setTokenState] = useRecoilState(bearerTokenState);
    const navigate = useNavigate();
    const loginHandler = () =>{
        axios.post("https://exampal.herokuapp.com/users/login",
        {
                "email":email,
                "password":password,
        }
        )
        .then((res)=>{
            setTokenState(res.data.token);
            sessionStorage.setItem("userId",res.data.id);
            console.log(tokenState)
            if(res.data.isAdmin){
                navigate("/admin")
            }
            else{
                navigate("/users")
            }
        })
        .catch((err)=>alert(`Error at login: ${err}`));
        console.log([email,password])
    }
    return (
        <div className='h-screen w-screen bg-tertiary flex items-center justify-center'>
            <div className='bg-primary flex flex-col p-5 rounded-2xl h-3/4 w-1/2 justify-center space-y-5'>
                <h1 className='text-center text-3xl'>EXAMPAL</h1>
                <h1 className='text-3xl'>Login</h1>
                <label>Email</label>
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="text" className='rounded-2xl p-5'/>
                <label>Password</label>
                <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password" className='rounded-2xl p-5'/>
                <button 
                className='bg-secondary p-5 rounded-2xl'
                onClick={loginHandler}>
                    Login
                </button>
                <div className='flex justify-end'>
                    <Link to="/users/register">New here? Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
