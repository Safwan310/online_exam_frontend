import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';
import QuestionComponent from "../components/QuestionComponent";



const IndividualTest = () => {
    const { subject, test } = useParams();
    const [testInfo, setTestInfo] = useState({});
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    const testSubmitter = () =>{
        setLoading(true);
        let answers = JSON.parse(localStorage.getItem("answerOptions"));
        let marks = 0;
        for(let i = 0; i < answers.length; i++){
            if(answers[i].answer === testInfo.testQuestions[answers[i].num].correctOption){
                marks += 1;
            }
        }
        axios.post("https://exampal.herokuapp.com/users/submit",{
            subject:subject,
            testName:test,
            marks:marks
        },{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then(()=>{
            navigate("/users")
        })
        .catch((err)=>{
            alert(`Error at test submission: ${err}`);
        })

    }

    useEffect(() => {
        axios.post("https://exampal.herokuapp.com/users/test",{
            subject:subject,
            testName:test
        },{
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then((res)=>{
            setTestInfo(res.data)
            setLoading(false);
        })
        .catch((err)=>alert(`Error at fetching individual test: ${err}`))
    }, [subject,test])
    let answers = [];
    localStorage.setItem("answerOptions",JSON.stringify(answers));
    let questionComps = testInfo.testQuestions?.map((question,index)=>(
        <QuestionComponent 
        num ={index} 
        question={question.question}
        options={question.options}
        />
    ))
    return (
        <div className='h-full'>
            <NavBar/>
            {loading ? (
                <Loader/>
            ):(
                <>
                        <div className='flex justify-between p-5'>
                        <h1 
                        className='text-3xl '>
                            {testInfo.subjectName}
                        </h1>    
                        <h1 className='text-3xl'>
                            {testInfo.testName}
                        </h1>
                        <h1 className='text-3xl'>
                            Duration: 30 mins
                        </h1>
                        </div>
                        <div className="flex flex-col space-y-5 p-5">
                            {questionComps}
                        </div>
                        <div className="flex justify-center p-5">
                            <button 
                            onClick={testSubmitter}
                            className="bg-tertiary rounded-2xl p-3 text-primary">
                                Submit Test
                            </button>
                        </div>
                </>
            )}
        </div>
    )
}

export default IndividualTest
