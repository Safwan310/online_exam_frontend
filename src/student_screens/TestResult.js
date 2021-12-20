import React from 'react'

function TestResult({ testNo, subject, date, totalMarks }) {
    return (
        <div className='pl-4 bg-white justify-center space-y-4 pr-10 py-1'>
            <div className='h-20 bg-warning flex rounded-md place-items-center '>
                <div className="w-1/4 pl-4 ">
                    <label class="text-center  block text-gray-700 text-sm font-bold" for="username">
                        {testNo}
                    </label>
                </div>
                <div className="w-1/4">
                    <label class="text-center block text-gray-700 text-sm font-bold" for="username">
                        {subject}
                    </label>
                </div>
                <div className="w-1/4">
                    <label class="text-center block text-gray-700 text-sm font-bold" for="username">
                        {date}
                    </label>
                </div>
                <div className="w-1/4">
                    <label class="text-center block text-gray-700 text-sm font-bold" for="username">
                        {totalMarks}/100
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TestResult
