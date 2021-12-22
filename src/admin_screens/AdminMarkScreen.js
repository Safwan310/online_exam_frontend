import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import MarkComponent from '../components/MarkComponent';
import NavBar from '../components/NavBar'

const AdminMarkScreen = () => {
    const { subject, test } = useParams();
    const [marks, setMarks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.post("https://exampal.herokuapp.com/admin/getMarks",{
            subject:subject,
            testName:test
        },{
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then((res)=>{
            setMarks(res.data);
            setLoading(false);
        })
        .catch((err)=>alert(`Error at fetching marks on admin side: ${err}`))
    }, [subject,test])
    let markComps = marks.map((mark)=>(
        <MarkComponent 
        studentName={mark.studentName}
        marks={mark.marks}
        />
    ))
    return (
        <div className='h-screen'>
            <NavBar/>
            {loading ? 
            (
                <div
                className='flex justify-center items-center h-screen'
                >
                    <Loader/>
                </div>
            ):
            (
                <div className="p-5 space-y-10">
                    <h1 className='text-center text-3xl '>Marklist for test: {test}</h1>
                    <h2 className='text-center text-2xl'>Subject: {subject}</h2>
                    <div className='bg-primary rounded-2xl flex flex-col p-5 space-y-5'>
                       <div className='flex justify-between p-5'>
                           <p>Student Name</p>
                           <p>Student Marks</p>
                       </div>
                       {markComps}
                    </div>
                </div>   
            )}
        </div>
    )
}

export default AdminMarkScreen
