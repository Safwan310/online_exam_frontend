import React from 'react'
import { Link } from 'react-router-dom'

const TestComponents = ({subject,qCount,name}) => {
    const location = (window.location.pathname.startsWith("/admin"))?"admin":"users";
    return (
            <Link 
            to={`/${location}/${subject}/${name}`}
            className='text-center p-5 bg-primary rounded-2xl'>
                <div className='flex justify-between'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <p>{name}</p>
                    <p>Question: {qCount}</p>
                </div>
            </Link>
    )
}

export default TestComponents
