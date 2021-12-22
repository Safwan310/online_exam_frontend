import React from 'react'

const StudentMarkComponent = ({subjectName,testName,marks}) => {
    return (
        <div className='flex bg-tertiary justify-around text-white p-5 rounded-2xl'>
            <p>{subjectName}</p>
            <p>{testName}</p>
            <p>{marks}</p>
        </div>
    )
}

export default StudentMarkComponent
