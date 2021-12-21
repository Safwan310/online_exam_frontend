import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SubjectComponent from '../components/SubjectComponent';
import { useRecoilValue } from 'recoil';
import { bearerTokenState } from '../atoms/bearerTokenState';
import axios from 'axios';
import Loader from '../components/Loader';
const HomeScreen = () => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    let token = useRecoilValue(bearerTokenState);
    if(token){
        sessionStorage.setItem("userToken",token);
    }

    useEffect(() => {
        axios.get("https://exampal.herokuapp.com/users/subjects",{
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then((res)=>{
            setSubjects(res.data)
            setLoading(false)
        })
        .catch((err)=>alert(`Error at fetching subs at users side: ${err}`))
    }, [])

    let subjectComps = subjects.map((subject)=>(
        <SubjectComponent 
        name={subject.subjectName}
        image={subject.subjectImageUrl}/>
    ))
    return (
        <div className='h-screen bg-warning overflow-y-scroll'>
            <NavBar/>
            {loading ? (
                 <Loader/>
            ):
            (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                    {subjectComps}
                </div>
            )
            } 
        </div>
    )
}

export default HomeScreen
