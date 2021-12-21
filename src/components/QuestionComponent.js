import React from 'react'

const QuestionComponent = ({num, question, options}) => {
    const optionComps = options.map((option)=>(
        <div className='flex items-center space-x-5'> 
        <input 
        onChange={(e)=>{
            let answer = e.target.value;
            let tempList = JSON.parse(localStorage.getItem("answerOptions"));
            tempList.push({num,answer});
            localStorage.setItem("answerOptions",JSON.stringify(tempList));
        }}
        type="checkbox" 
        className='text-2xl text-danger'
        value={option}/>
        <p>{option}</p>
        </div>
    ))
    return (
        <div className='flex flex-col bg-primary p-5 rounded-2xl shadow-lg space-y-5'>
            <div className='flex space-x-5'>
                <p>{num+1}. </p>
                <p>{question}</p>
            </div>
            <div className='flex flex-col space-y-5'>
                {optionComps}
            </div>
        </div>
    )
}

export default QuestionComponent
