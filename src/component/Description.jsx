import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom';
import './Cards.css'
import { Button } from '@mui/material';
import Cards from './Cards';
import {arr} from './data.js'
function Description() {
    
    const {id}=useParams();

    const navigate=useNavigate();
    
    let job=arr.filter(e=>e.id==id)

    const [jobs,setJobs]=useState(job[0]||[]);


    useEffect(() => {
        // let id =req.params;
        jobs ||
        axios.get(`http://localhost:4444/jobs/${id}`)
        .then((res)=>{
            // var searchResult = res.data.filter(word => word.job_title.toLowerCase().indexOf(search) > -1);
            // console.log(searchResult);
            setJobs(res.data)
        })
       }, [])
       const handleClick=()=>{
        
            alert(`your detail is sent for the ${jobs.company_name}`)
            navigate('/')
       
       }
       console.log("desc",jobs)
  return (
    <div style={{
        "width":"80%",
        "height":"400px",
        "boxShadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        "marginLeft":"10%",
        "marginRight":"5%",
        "margin":"auto",
        "marginTop":"4%",
        "backgroundColor":"skyblue"
    }}>
       <h3  className='headings' >
                        <span>Company Name :</span> <span>{jobs.company_name}</span>
                    </h3>
                    <h3 className='headings'>
                        <span>Job Title :</span> <span>{jobs.job_title}</span>
                    </h3>
                    {/* <h3 className='headings'>
                        <span>Tech Stack :</span> 
                        <span>{jobs.Required_Skills[0]}&nbsp;|| </span> 
                        <span>{jobs.Required_Skills[1]}&nbsp;|| </span>
                        <span>{jobs.Required_Skills[2]}&nbsp;|| </span>
                        <span>{jobs.Required_Skills.map((e)=> <span>{e}&nbsp;|| &nbsp;</span> )}</span>
                    </h3> */}
                    {/* <h3 className='headings'>
                        <span>Selection Process :</span> 
                       
                        <span>{jobs.Selection_Process[0]}&nbsp;|| </span> 
                        <span>{jobs.Selection_Process[1]}&nbsp;|| </span>
                        <span>{jobs.Selection_Process[2]}&nbsp;|| </span>
                    </h3> */}
                    <h3 className='headings'>
                        <span>Required Qualification :</span> <span>{jobs.Qualification}</span>
                    </h3>
                    <h3 className='headings'>
                        <span>Experience :</span> <span>{jobs.Experience}</span>
                    </h3>
                    <h3 className='headings'>
                        <span>Minimum_Salary :</span> <span>{jobs.Minimum_Salary}</span>
                    </h3>
                    <h3 className='headings'>
                        <span>Maximum_Salary :</span> <span>{jobs.Maximum_Salary}</span>
                    </h3>
                    <Button variant="contained"  onClick={handleClick}
                    
                        > Apply here</Button>
    </div>
  )
}

export default Description
