import React from 'react'
import { Link } from 'react-router-dom'

const SubjectComponent = ({image,name}) => {
    return (
        <Link to={`/users/${name}`} className='bg-primary rounded-2xl shadow-xl h-5/6 w-5/6 p-2'>
            <img src={image} className="h-3/4 w-full object-cover rounded-2xl" alt="" />
            <h1 className='text-center text-2xl p-2'>{name}</h1>
        </Link>
    )
}

export default SubjectComponent
