import React from 'react'

function ProfileDetails({ src, Name, Email, RegistrationNumber }) {
    return (
        <div className=' bg-white flex space-x-40 center space-y-20'>
            <div className='w-1/3 flex justify-left gap-20 p-10 place-items-center'>
                <img className='rounded-full object-cover h-80 w-80 ' src={src} alt=""/>
            </div>

            <div className='w-1/3 justify-center space-y-4 pr-10'>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Student Name     : {Name}
                        </label>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Student Email ID : {Email}
                        </label>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Student Reg.No   :{RegistrationNumber}
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-secondary hover:bg-tertiary text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
                            Edit
                        </button>
                        <button class="bg-secondary hover:bg-tertiary text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileDetails
