import React from 'react'
import { useState } from 'react'

const Education = () => {
    const [uni,setuni]=useState('');
    const [degree,setdegree]=useState('');
    const [syear,setsyear]=useState('');
    const [eyear,seteyear]=useState('');

    return (
    <div>
        <input placeholder='University Name'
        id='uni'
        name='uni'
        type='text'
        onChange={e=>setuni(e.target.value)}
        value={uni}
        />

        <input placeholder='Degree Name'
        id='degree'
        name='degree'
        type='text'
        onChange={e=>setdegree(e.target.value)}
        value={degree}
        />

        <input placeholder='Start year'
        id='syear'
        name='syear'
        type='number'
        onChange={e=>setsyear(e.target.value)}
        value={syear}
        />

        <input placeholder='End Year'
        id='eyaer'
        name='eyear'
        type='number'
        onChange={e=>seteyear(e.target.value)}
        value={eyear}
        />

        <button>Click</button>

        <h3 style={{fontSize:'2rem'}}>University Name:{uni}</h3>
        <h3 style={{fontSize:'2rem'}}>Degree Name:{degree}</h3>
        <h3 style={{fontSize:'2rem'}}>Start Year:{syear}</h3>
        <h3 style={{fontSize:'2rem'}}>End ear:{eyear}</h3>



    </div>
  )
}

export default Education