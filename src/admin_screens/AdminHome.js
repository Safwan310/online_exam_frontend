import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { bearerTokenState } from '../atoms/bearerTokenState'

import AdminSubjectComponent from '../components/AdminSubjectComponent'
import NavBar from '../components/NavBar'


const AdminHome = () => {
    const [subjects, setSubjects] = useState([])
    const [loading, setLoading] = useState(true)
    const token = useRecoilValue(bearerTokenState);
    if(token){
        sessionStorage.setItem("userToken",token);
    }
    
    let navigate = useNavigate();
    const subjectAdder = ()=>{
        navigate("/admin/addSubject");
    }

    useEffect(() => {
        axios.get("https://exampal.herokuapp.com/admin/getSubjects", {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then((res)=>{
            setLoading(false)
            setSubjects(res.data)
            console.log(subjects)
        })
        .catch((err)=>alert(`Error at fetching subs at admin side: ${err}`))
    }, [subjects])
    let subjectComps = subjects.map((subject)=>(
        <AdminSubjectComponent name={subject.subjectName} image={subject.subjectImageUrl}/>
    ))
    return (
        <div className='h-full lg:h-screen bg-warning'>
            <NavBar/>
            <div>
                {
                loading ? (
                    <div className="flex items-center justify-center h-screen">
                        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                    </div>
                ):
                ( 
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 h-full bg-warning'>
                        {subjectComps}
                    </div>
                    
                )
                }
            </div>
            <div className='flex justify-end p-5 bg-warning'>
                <button
                className='bg-tertiary p-5 rounded-2xl shadow-xl'
                onClick={subjectAdder}
                >+ Add Subject
                </button>
            </div>  
        </div>
    )
}

export default AdminHome
