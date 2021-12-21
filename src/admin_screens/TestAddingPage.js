import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

const TestAddingPage = () => {
    const [qState, setQState] = useState("hidden")
    const [promptState, setPromptState] = useState("block")
    const [testName, setTestName] = useState("");
    const [qCount, setQCount] = useState(0);
    const [questions, setquestions] = useState([]);
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionOptions, setQuestionOptions] = useState("");
    const [correctOption,setCorrectOption] = useState("");
    const { subject } = useParams();
    let navigate = useNavigate();

    const questionAdder = () =>{
        if(qCount > 0){
            let questionObj = {
                question: questionTitle,
                options:questionOptions.split(","),
                correctOption:correctOption
            }
            setQuestionTitle("");
            setQuestionOptions("");
            setCorrectOption("");
            let temp = questions;
            temp.push(questionObj);
            setquestions(temp);
            console.log(questions);
            setQCount(qCount-1);
        }
    }

    const testAdder = ()=>{
        axios.post("https://exampal.herokuapp.com/admin/createTest",{
            subjectName:subject,
            testName:testName,
            testQuestions:questions
        },{
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then(()=>{
            navigate(`/admin/${subject}`)
        })
        .catch((err)=>{
            alert(`Error at test uploading: ${err}`)
        })
    }

    return (
        <div className='h-screen bg-warning'>
            <NavBar/>
            <div className='h-3/4 flex justify-center items-center'>
                <div className={`${promptState} flex flex-col justify-center bg-primary p-10 rounded-2xl shadow-lg space-y-5`}>
                    <label htmlFor="">Test Name</label>
                    <input 
                    value={testName}
                    onChange={(e)=>{setTestName(e.target.value)}}
                    className="p-3 rounded-2xl" type="text" />
                    <label htmlFor="">Number of questions</label>
                    <input 
                    onChange={(e)=>setQCount(e.target.value)}
                    className="p-3 rounded-2xl" type="text" />
                    <button 
                    onClick={()=>{
                        if(qState === "hidden"){
                            setQState("block")
                            setPromptState("hidden")
                        }
                    }}  
                    className='bg-tertiary p-5 rounded-2xl text-primary'>
                        Add Questions
                    </button>
                </div> 
                <div className={`${qState} bg-primary p-10 rounded-2xl flex flex-col space-y-5`}>
                    <label htmlFor="">Question</label>
                    <input 
                    value={questionTitle}
                    onChange={(e)=>{setQuestionTitle(e.target.value)}}
                    className="p-3 rounded-2xl" type="text" />
                    <label htmlFor="">Options</label>
                    <input 
                    value={questionOptions}
                    onChange={(e)=>{setQuestionOptions(e.target.value)}}
                    className="p-3 rounded-2xl" type="text" />
                    <label htmlFor="">Correct Option</label>
                    <input 
                    value={correctOption}
                    onChange={(e)=>{setCorrectOption(e.target.value)}}
                    className="p-3 rounded-2xl"
                    type="text" />
                    {qCount === 0 ? (
                        <button
                        onClick={testAdder}
                        className='bg-tertiary rounded-xl p-3 text-primary'>
                            Post Test
                        </button>
                    ):(
                        <button 
                        onClick={questionAdder}
                        className='bg-tertiary rounded-xl p-3 text-primary'>
                            + Add 
                        </button>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default TestAddingPage
