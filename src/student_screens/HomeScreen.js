import React from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';
import SubjectComponent from '../components/SubjectComponent';
const HomeScreen = () => {
    const navigate = useNavigate();
    const subjects = [
        {
            subjectName:"Zoology",
            subjectImageUrl:"https://wallpapercave.com/wp/wp1812288.jpg"
        },
        {
            subjectName:"Physics",
            subjectImageUrl:"https://www.environmentalscience.org/wp-content/uploads/2018/08/physics-640x416.jpg"
        },
        {
            subjectName:"Chemistry",
            subjectImageUrl:"https://coolwallpapers.me/picsup/5434772-physics-and-chemistry-wallpapers.jpg"
        },
        {
            subjectName:"Zoology",
            subjectImageUrl:"https://wallpapercave.com/wp/wp1812288.jpg"
        },
        {
            subjectName:"Physics",
            subjectImageUrl:"https://www.environmentalscience.org/wp-content/uploads/2018/08/physics-640x416.jpg"
        },
        {
            subjectName:"Chemistry",
            subjectImageUrl:"https://coolwallpapers.me/picsup/5434772-physics-and-chemistry-wallpapers.jpg"
        }
    ]
    let subjectComps = subjects.map((subject)=>(
        <SubjectComponent 
        name={subject.subjectName}
        image={subject.subjectImageUrl}/>
    ))
    return (
        <div className='h-screen bg-white overflow-y-scroll'>
            <NavBar/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {subjectComps}
            </div>
        </div>
    )
}

export default HomeScreen
