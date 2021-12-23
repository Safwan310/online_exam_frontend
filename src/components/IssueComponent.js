import React from 'react'

const IssueComponent = ({
        postedBy,
        subjectName,
        testName,
        issue,
        time
    }) => {
    return (
        <tr className='text-center border border-1 border-b-gray-800'>
            <td className='p-5'>{postedBy}</td>
            <td>{subjectName}</td>
            <td>{testName}</td>
            <td>{issue}</td>
            <td>{time}</td>
            <td className='p-2'>
                <button
                className='bg-tertiary rounded-2xl p-2'
                >
                    Fix Issue
                </button>
            </td>
        </tr>
    )
}

export default IssueComponent
