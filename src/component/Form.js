import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const [mobile,setmobile]=useState('');
    const [email,setemail]=useState('');

    return (
    <div>
    

        <input name="fname"
            id="fname"
            placeholder="First Name"
            type="text"
            onChange={e=>setfname(e.target.value)}
            value={fname}
        />

            <input name="lname"
            id="lname"
            placeholder="Last Name"
            type="text"
            onChange={e=>setlname(e.target.value)}
            value={lname}
        />

        <input name="mobile"
            id="mobile"
            placeholder="Mobile"
            type="number"
            onChange={e=>setmobile(e.target.value)}
            value={mobile}
        />

            <input name="email"
            id="email"
            placeholder="Email"
            type="mail"
            onChange={e=>setemail(e.target.value)}
            value={email}
        />

        <button>Submit</button>

        <h2>First Name : {fname}</h2>
        <h2>Last : {lname}</h2>
        <h2>Mobile: {mobile}</h2>
        <h2>Email : {email}</h2>


    </div>
  )
}

export default Form