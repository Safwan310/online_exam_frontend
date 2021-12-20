import React from 'react'
import NavBar from '../components/NavBar'
import ProfileDetails from './ProfileDetails'
const Profile = () => {
    return (
        <div>
            <NavBar />

            <ProfileDetails
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                Name="User Name"
                Email="1234@gmail.in"
                RegistrationNumber="123"
            />
        </div>
    )
}

export default Profile
