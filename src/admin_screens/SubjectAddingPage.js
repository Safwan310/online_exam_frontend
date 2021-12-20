import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar'

const SubjectAddingPage = () => {
    const [subjectName, setSubjectName] = useState("");
    const [subjectImage, setSubjectImage] = useState("");
    let navigate = useNavigate();
    const additionHandler = () =>{
        axios.post("https://exampal.herokuapp.com/admin/createSubject",{
            "subjectName":subjectName,
            "subjectImageUrl":subjectImage
        },
        {
            headers:{
                authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then(()=>{
            navigate("/admin")
        })
        .catch((err)=>{
            alert(`Error at subject adding: ${err}`)
        })
    }

    return (
        <div className='h-screen bg-warning'>
            <NavBar/>
            <div className='h-3/4 flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center bg-primary p-10 space-y-7 rounded-2xl shadow-xl">
                    <label htmlFor="">Subject Name</label>
                    <input 
                    value={subjectName}
                    onChange={(e)=>{setSubjectName(e.target.value)}}
                    className="p-3 rounded-2xl" 
                    type="text" />
                    <label htmlFor="">Subject Image URL</label>
                    <input
                    value={subjectImage} 
                    onChange={(e)=>{setSubjectImage(e.target.value)}}
                    className="p-3 rounded-2xl"
                    type="text" />
                    <button 
                    onClick={additionHandler}
                    className='p-3 bg-tertiary rounded-2xl text-primary shadow-lg'>
                        Add Subject
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubjectAddingPage
