import React from 'react'

const MarkComponent = ({studentName,marks}) => {
    return (
        <div className='flex justify-between bg-tertiary p-5 rounded-2xl space-x-5'>
            <p>{studentName}</p>
            <p>{marks}</p>
        </div>
    )
}

export default MarkComponent
