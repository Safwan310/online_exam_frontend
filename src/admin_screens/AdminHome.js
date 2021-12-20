import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { bearerTokenState } from '../atoms/bearerTokenState'

import AdminSubjectComponent from '../components/AdminSubjectComponent'
import NavBar from '../components/NavBar'


const AdminHome = () => {
    const [subjects, setSubjects] = useState([])
    const [loading, setLoading] = useState(true)
    const token = useRecoilValue(bearerTokenState);
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    useEffect(() => {
        axios.get("https://exampal.herokuapp.com/admin/getSubjects",config)
        .then((res)=>{
            setLoading(false)
            setSubjects(res.data)
            console.log(subjects)
        })
        .catch((err)=>alert(`Error at fetching subs at admin side: ${err}`))
    }, [])
    let subjectComps = subjects.map((subject)=>(
        <AdminSubjectComponent name={subject.subjectName} image={subject.subjectImageUrl}/>
    ))
    return (
        <div className='h-screen'>
            <NavBar/>
            <div>
                {
                loading ? (
                    <div className="flex items-center justify-center ">
                        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                    </div>
                ):
                ( 
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                        {subjectComps}
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default AdminHome
