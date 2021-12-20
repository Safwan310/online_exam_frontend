import React from 'react'
import NavBar from '../components/NavBar'
import TestResult from './TestResult'
const MarkScreen = () => {
    return (
        <div className=''>
            <NavBar />
            <div className='bg-white text-center pt-4 pb-4'>
                <div className='text-2xl'>
                    Test Scores
                </div>
                <div className='flex text-2xl text-center pl-4 '>
                    <label class="pl-4 text-center w-1/4 block text-gray-700 text-sm font-bold" for="username">
                        Test No
                    </label>
                    <label class="pr-7 text-center w-1/4 block text-gray-700 text-sm font-bold" for="username">
                        Subject
                    </label>
                    <label class="pr-12 text-center w-1/4 block text-gray-700 text-sm font-bold" for="username">
                        Date
                    </label>
                    <label class="pr-16 text-center w-1/4 block text-gray-700 text-sm font-bold" for="username">
                        Marks
                    </label>
                </div>
                <div className=''>
                    <TestResult
                        testNo="1"
                        subject="Math"
                        date="19/12/2021"
                        totalMarks="99"
                    />
                    <TestResult
                        testNo="2"
                        subject="DSA"
                        date="1/12/2021"
                        totalMarks="100"
                    />
                </div>
            </div>
        </div>
    )
}

export default MarkScreen
