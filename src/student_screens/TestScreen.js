import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import TestComponents from '../components/TestComponents'

const TestScreen = () => {
    
    const { subject } = useParams();
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.post("https://exampal.herokuapp.com/users/tests",{
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
        .catch((err)=>alert(`Error at fetching tests on users : ${err}`))
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
                </>
            )
            }   
        </div>
    )
}

export default TestScreen
