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
    const [correctOption, setCorrectOption] = useState("");
    const { subject } = useParams();
    let navigate = useNavigate();


    let errorsObj = { questionTitle: '', questionOptions: '', correctOption: '' };
    const [errors, setErrors] = useState(errorsObj);


    const questionAdder = () => {
        if (qCount > 0) {
            let questionObj = {
                question: questionTitle,
                options: questionOptions.split(","),
                correctOption: correctOption
            }
            setQuestionTitle("");
            setQuestionOptions("");
            setCorrectOption("");
            let temp = questions;
            temp.push(questionObj);
            setquestions(temp);
            console.log(questions);
            setQCount(qCount - 1);
        }
    }

    function onPost(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (questionTitle == "") {
            errorObj.questionTitle = 'Please Add the question';
            console.log('Add question');
            error = true;
        }
        if (questionOptions.length < 8) {
            errorObj.questionOptions = 'Please Add 4 options with commas in between';
            error = true;
        }
        if (correctOption == "") {
            errorObj.correctOption = 'Please Add the correct answer';
            error = true;
        }
        setErrors(errorObj);
    }

    function onAddTest(e) {
        //const qCountRegex = "[0-9]*"
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (testName == "") {
            errorObj.testName = 'Please Add the test name';
            console.log('Add subject');
            error = true;
        }
        if (qCount == "") {
            errorObj.qCount = 'Please Add the number of questions';
            error = true;
        }
        setErrors(errorObj);
    }
    const testAdder = () => {
        axios.post("https://exampal.herokuapp.com/admin/createTest", {
            subjectName: subject,
            testName: testName,
            testQuestions: questions
        }, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
            .then(() => {
                navigate(`/admin/${subject}`)
            })
            .catch((err) => {
                alert(`Error at test uploading: ${err}`)
            })
    }

    return (
        <div className='h-screen bg-warning'>
            <NavBar />
            <div className='h-3/4 flex justify-center items-center'>
                <form onSubmit={onAddTest}>
                    <div className={`${promptState} flex flex-col justify-center bg-primary p-10 rounded-2xl shadow-lg space-y-5`}>
                        <label htmlFor="">Test Name</label>
                        <input
                            value={testName}
                            onChange={(e) => { setTestName(e.target.value) }}
                            className="p-3 rounded-2xl" type="text" />
                        {errors.testName && <div className='text-red-600'>{errors.testName}</div>}

                        <label htmlFor="">Number of questions</label>
                        <input
                            onChange={(e) => setQCount(e.target.value)}
                            className="p-3 rounded-2xl" type="text" />
                        {errors.qCount && <div className='text-red-600'>{errors.qCount}</div>}

                        <button
                            type="submit"
                            onClick={() => {
                                if (qState === "hidden") {
                                    setQState("block")
                                    setPromptState("hidden")
                                }
                            }}
                            className='bg-tertiary p-5 rounded-2xl text-primary'>
                            Add Questions
                        </button>
                    </div>
                </form>
                <form onSubmit={onPost}>
                    <div className={`${qState} bg-primary p-10 rounded-2xl flex flex-col space-y-5`}>
                        <label htmlFor="">Question</label>
                        <input
                            value={questionTitle}
                            onChange={(e) => { setQuestionTitle(e.target.value) }}
                            className="p-3 rounded-2xl" type="text" />
                        {errors.questionTitle && <div className='text-red-600'>{errors.questionTitle}</div>}

                        <label htmlFor="">Options</label>
                        <input
                            value={questionOptions}
                            onChange={(e) => { setQuestionOptions(e.target.value) }}
                            className="p-3 rounded-2xl" type="text" />
                        {errors.questionOptions && <div className='text-red-600'>{errors.questionOptions}</div>}

                        <label htmlFor="">Correct Option</label>
                        <input
                            value={correctOption}
                            onChange={(e) => { setCorrectOption(e.target.value) }}
                            className="p-3 rounded-2xl"
                            type="text" />
                        {errors.correctOption && <div className='text-red-600'>{errors.correctOption}</div>}

                        {qCount === 0 ? (
                            <button
                                onClick={testAdder}
                                className='bg-tertiary rounded-xl p-3 text-primary'>
                                Post Test
                            </button>
                        ) : (
                            <button
                                type="submit"
                                onClick={questionAdder}
                                className='bg-tertiary rounded-xl p-3 text-primary'>
                                + Add
                            </button>
                        )}

                    </div>
                </form>
            </div>
        </div>
    )
}

export default TestAddingPage

