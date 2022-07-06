import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Searched({data}) {

console.log("data",data)

const [jobs,setJobs]=useState(data)

  return (
    <>
    {jobs.map((job)=>
      <div key={job.id} style={{
      "width":"90%",
      "marginLeft":'5%',
      "marginRight":"5%",
      "height":"200px",
      "boxShadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      "backgroundColor":'red'
      }}>
  <h3  className='headings' >
      <span>Company Name :</span> <span>{job.company_name}</span>
  </h3>
  <h3 className='headings'>
      <span>Job Title :</span> <span>{job.job_title}</span>
  </h3>
  <h3 className='headings'>
      <span>Tech Stack :</span> <span>{job.Required_Skills.map((e)=> <span>{e}&nbsp;|| &nbsp;</span> )}</span>
  </h3>
  <Link className='link' to={`/job_desc/${job.id}`}>
  <Button variant='contained'
                 >Know more here</Button>
          </Link>
</div>)}
    </>
    // <div style={{
    //     "width":"200px",
    //     "height":'200px',
    //     "backgroundColor":"skyblue",
    //     "display":"flex",
    //     "justifyContent":"flex-end",
    //   "position":'absolute',
    //   "top":50,
    //   "left":900
    //   }}>
    //     {job.job_title}
    // </div>
  )
}

export default Searched