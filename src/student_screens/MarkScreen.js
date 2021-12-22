import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import NavBar from '../components/NavBar'
import StudentMarkComponent from '../components/StudentMarkComponent'
const MarkScreen = () => {
    const [marks, setMarks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.post("https://exampal.herokuapp.com/users/marks",{
            id:sessionStorage.getItem("userId")
        },{
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then((res)=>{
            setMarks(res.data);
            setLoading(false);
        })
        .catch((err)=>alert(`Error at fetching marks on users side: ${err}`))
    }, [])
    console.log(marks);
    let markComps = marks.map((mark)=>(
        <StudentMarkComponent 
        subjectName={mark.subjectName} 
        marks={mark.marks}
        testName={mark.testName}
        />
    ))
    return (
        <div className='h-screen'>
            <NavBar />
            {loading ? 
            (
                <Loader/>
            )
            :
            (
                    <div className='bg-warning text-center p-5'>
                        <div className='text-2xl'>
                            Test Scores
                        </div>
                        <div className='flex text-2xl justify-around p-5'>
                            <p>Subject Name</p>
                            <p>Test Name</p>
                            <p>Marks</p>
                        </div>
                        <div className='flex flex-col space-y-5 bg-primary p-5 rounded-2xl'>
                            {markComps}
                        </div>
                    </div>
            )}
            
        </div>
    )
}

export default MarkScreen
