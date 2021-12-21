import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import TestComponents from '../components/TestComponents'

const AdminTestScreen = () => {
    
    const { subject } = useParams();
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        axios.post("https://exampal.herokuapp.com/admin/getTests",{
            subject:subject
        },{
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then((res)=>{
            setTests(res.data);
            setLoading(false);
        })
        .catch((err)=>alert(`Error at fetching tests on admin : ${err}`))
    }, [subject])

    
    let testComps = tests.map((test)=>(
        <TestComponents subject={test.subjectName} qCount={test.testQuestions.length} name={test.testName}/>
    ))
    return (
        <div className='h-screen bg-warning'>
            <NavBar/>
            {loading ? 
            (
                <div className="flex items-center justify-center h-screen">
                    <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                </div>
            ):
            (
                <>
                    <div className='flex flex-col space-y-5 p-5 h-3/4'>
                        {testComps}
                    </div>
                    <div
                    className='flex justify-end p-5'
                    >
                        <button 
                        onClick={()=>{navigate(`/admin/${subject}/addTest`)}}
                        className='bg-tertiary p-5 rounded-2xl shadow-lg'>
                            + Create Tests
                        </button>
                    </div>
                </>
            )
            }   
        </div>
    )
}

export default AdminTestScreen
