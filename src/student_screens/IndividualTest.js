import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

const IndividualTest = () => {
    return (
        <div>
            <NavBar/>
            {`This is ${useParams().test}`}
        </div>
    )
}

export default IndividualTest
