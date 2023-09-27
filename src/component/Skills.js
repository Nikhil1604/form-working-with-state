import React from 'react'
import { useState } from 'react'


const Skills = () => {
    const [skill,setskill]=useState('')
    const [skill2,setskill2]=useState('')
    const [skill3,setskill3]=useState('')
    const [skill4,setskill4]=useState('')
    
    return (
    <div>
        
        <input placeholder='Skill 1'
        name="skill"
        id='skill'
        type='text'
        onChange={e=>setskill(e.target.value)}
        value={skill}
         />

        <input placeholder='Skill 2'
        name="skill2"
        id='skill2'
        type='text'
        onChange={e=>setskill2(e.target.value)}
        value={skill2}
         />

        <input placeholder='Skill 3'
        name="skill3"
        id='skill3'
        type='text'
        onChange={e=>setskill3(e.target.value)}
        value={skill3}
         />

        <input placeholder='Skill 4'
        name="skill4"
        id='skill4'
        type='text'
        onChange={e=>setskill4(e.target.value)}
        value={skill4}
         />

    <button>Click</button>

    <h2>Skill 1: {skill}</h2>
    <h2>Skill 2: {skill2}</h2>
    <h2>Skill 3: {skill3}</h2>
    <h2>Skill 4: {skill4}</h2>


    </div>
  )
}

export default Skills