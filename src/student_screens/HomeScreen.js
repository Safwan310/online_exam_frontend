import React from 'react'
import NavBar from '../components/NavBar'

const HomeScreen = () => {
    return (
        <div className='h-screen bg-white'>
            <NavBar/>
            This is the Homepage<br/>
            Refer the colors
            <div className="p-10 flex flex-col space-y-5">
                <p className='bg-primary p-5 rounded-2xl'>bg-primary</p>
                <p className='bg-secondary p-5 rounded-2xl'>bg-secondary</p>
                <p className='bg-tertiary p-5 rounded-2xl'>bg-tertiary</p>
                <p className='bg-warning p-5 rounded-2xl'>bg-warning</p>
                <p className='bg-danger p-5 rounded-2xl'>bg-danger</p>
            </div>
        </div>
    )
}

export default HomeScreen
