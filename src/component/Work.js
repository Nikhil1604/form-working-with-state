import React from 'react'
import { useState } from 'react'
const Work = () => {
//   making use of use state
// declaring use variable
  const [jobTitle,setjobTitle]=useState('')
  const [orgName,setorgName]=useState('')
  const [startyear,setstartyear]=useState('')
  const [endyear,setendyear]=useState('')
    return (
    <div>
        <input placeholder='Job Title' 
        type="text"
        name='jobTitle'
        id='jobtitle'
        onChange={e=>setjobTitle(e.target.value)}
        />

    
        <input placeholder='Organisation Name' 
        type="text"
        name='orgName'
        id='orgName'
        onChange={e=>setorgName(e.target.value)}
        />

        <input placeholder='Start Year' 
        type="number"
        name='startyear'
        id='startyear'
        onChange={e=>setstartyear(e.target.value)}
        />

        <input placeholder='End Year' 
        type="text"
        name='endyear'
        id='endyear'
        onChange={e=>setendyear(e.target.value)}
        />

        <button>Next</button>
        <h2>Job Title:{jobTitle}</h2>
        <h2>Organisation Name:{orgName}</h2>
        <h2>Start Year:{startyear}</h2>
        <h2>End Year:{endyear}</h2>


    </div>
  )
}

export default Work