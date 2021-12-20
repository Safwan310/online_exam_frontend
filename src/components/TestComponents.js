import React from 'react'
import { Link } from 'react-router-dom'

const TestComponents = ({subject,name}) => {
    const location = (window.location.pathname.startsWith("/admin"))?"admin":"users";
    return (
            <Link 
            to={`/${location}/${subject}/${name}`}
            className='text-center p-5 bg-tertiary rounded-2xl'>
                {name}
            </Link>
    )
}

export default TestComponents
