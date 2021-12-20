import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import TestComponents from '../components/TestComponents'

const TestScreen = () => {
    const tests = [
            "Test1",
            "Test2",
            "test3"
    ]
    const { subject } = useParams();

    let testComps = tests.map((test)=>(
        <TestComponents subject={subject} name={test}/>
    ))
    return (
        <div className='h-screen bg-white'>
            <NavBar/>
            <div className='flex flex-col space-y-5 p-5'>
                {testComps}
            </div>
        </div>
    )
}

export default TestScreen
