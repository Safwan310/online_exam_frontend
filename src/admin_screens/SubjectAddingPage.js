import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar'

const SubjectAddingPage = () => {
    const [subjectName, setSubjectName] = useState("");
    const [subjectImage, setSubjectImage] = useState("");

    let errorsObj = { subjectName: '', subjectImage: '' };
    const [errors, setErrors] = useState(errorsObj);

    let navigate = useNavigate();
    const additionHandler = () => {
        axios.post("https://exampal.herokuapp.com/admin/createSubject", {
            "subjectName": subjectName,
            "subjectImageUrl": subjectImage
        },
            {
                headers: {
                    authorization: `Bearer ${sessionStorage.getItem("userToken")}`
                }
            })
            .then(() => {
                navigate("/admin")
            })
            .catch((err) => {
                alert(`Error at subject adding: ${err}`)
            })

    }
    function onAddSubject(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (subjectName == "") {
            errorObj.subjectName = 'Please Add the subject';
            console.log('Add subject');
            error = true;
        }
        if (subjectImage.length == 0) {
            errorObj.subjectImage = 'Please Add the image url';
            error = true;
        }
        setErrors(errorObj);
    }

    return (
        <div className='h-screen bg-warning'>
            <NavBar />
            <div className='h-screen flex justify-center items-center bg-tertiary'>
                <div className=' rounded-2xl shadow p-3 bg-primary'>
                    <form onSubmit={onAddSubject} className='p-5 space-y-5'>

                        <div>
                            <label>Subject Name</label>
                            <div>
                                <input
                                    type="text"
                                    className="p-3 rounded-2xl"
                                    value={subjectName}
                                    onChange={(e) => { setSubjectName(e.target.value) }}

                                />
                            </div>
                            {errors.subjectName && <div className='text-red-600'>{errors.subjectName}</div>}
                        </div>

                        <div >
                            <label htmlFor="">Subject Image URL</label>
                            <div>
                                <input
                                    value={subjectImage}
                                    onChange={(e) => { setSubjectImage(e.target.value) }}
                                    className="p-3 rounded-2xl"
                                    type="text" />
                            </div>
                            {errors.subjectImage && <div className='text-red-600'>{errors.subjectImage}</div>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={additionHandler}
                                className='p-3 bg-tertiary rounded-2xl text-primary shadow-lg'>
                                Add Subject
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubjectAddingPage
