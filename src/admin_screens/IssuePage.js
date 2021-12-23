import axios from 'axios';
import React, { useEffect, useState } from 'react'
import IssueComponent from '../components/IssueComponent';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar'

const IssuePage = () => {
    const [loading, setLoading] = useState(true);
    const [issues, setIssues] = useState([]);
    useEffect(() => {
        axios.get("https://exampal.herokuapp.com/admin/issues",{
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        })
        .then((res)=>{
            setIssues(res.data);
            setLoading(false);
        })
        .catch((err)=>{
            alert(`Error at fetching issues on admin side: ${err}`)
        })
    }, [])
    let issueComps = issues.map((issue)=>(
        <IssueComponent
        postedBy={issue.postedBy}
        subjectName={issue.subjectName}
        testName={issue.testName}
        issue={issue.issue}
        time={issue.createdAt}
        />
    ))
    return (
        <div className='h-screen'>
            <NavBar/>
            <div className='h-5/6'>
                {loading ? 
                (
                    <Loader/>
                )
                :
                (
                    <div className='flex justify-center p-10 h-full items-center'>
                        <table className='table-fixed border-2 border-black shadow-xl'>
                            <thead
                            >
                                <tr
                                className='bg-danger rounded-2xl p-5'
                                >
                                    <th>Posted By</th>
                                    <th>Subject Name</th>
                                    <th>Test Name</th>
                                    <th>Issue</th>
                                    <th>Time</th>
                                    <th>Handle Issue</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {issueComps}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default IssuePage
