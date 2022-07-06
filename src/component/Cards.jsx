import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
// import { getData } from './Debounce';
import './Cards.css'
import Description from './Description';

function Cards() {

    const [jobs,setJobs]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/jobs")
        // .then((res)=>{
        //     // var searchResult = res.data.filter(word => word.job_title.toLowerCase().indexOf(search) > -1);
        //     res.json()
        // })
        .then((res)=>{
            
            console.log(res.data,"card");
            setJobs(res.data)
        }
        
        )
       }, [])
  console.log("jobs",jobs)
  
  return (
    <div>
         {
            jobs.map((elem )=>

            <div key={elem.id} style={{
                        "width":"90%",
                        "marginLeft":'5%',
                        "marginRight":"5%",
                        "height":"200px",
                        "boxShadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        "backgroundColor":'skyblue'
                        }}>
                    <h3  className='headings' >
                        <span>Company Name :</span> <span>{elem.company_name}</span>
                    </h3>
                    <h3 className='headings'>
                        <span>Job Title :</span> <span>{elem.job_title}</span>
                    </h3>
                    <h3 className='headings'>
                        <span>Tech Stack :</span> <span>{elem.Required_Skills.map((e)=> <span>{e}&nbsp;|| &nbsp;</span> )}</span>
                    </h3>
                    <Link className='link' to={`/job_desc/${elem.id}`}>
                    <Button variant='contained'
                                   >Know more here</Button>
                            </Link>
              </div>
         )
        }
    </div>
  )
}

export default Cards
