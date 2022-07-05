import React, { useState , useEffect} from 'react'
import axios from 'axios'
import { getData } from './Debounce';
function Cards() {
    const [jobs,setJobs]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9999/jobs`)
        .then((res)=>{
            // var searchResult = res.data.filter(word => word.job_title.toLowerCase().indexOf(search) > -1);
            // console.log(searchResult);
            setJobs(res.data)
        })
       }, [])
  console.log(jobs)
  return (
    <div>
      {/* {jobs[0].job_title} */}
    </div>
  )
}

export default Cards
