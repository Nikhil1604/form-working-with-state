import React from 'react'
import { useState } from 'react'

const Personal = () => {

    // using use state to set value to variable on any 
    // kind of change in input values
    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const [mobile,setmobile]=useState('');
    const [email,setemail]=useState('');
    const [city,setcity]=useState('');
    const [region,setregion]=useState('');
    const [pincode,setpincode]=useState('');
    return (
    <div>
    
va
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
            <input name="city"
            id="city"
            placeholder="City"
            type="text"
            onChange={e=>setcity(e.target.value)}
            value={city}
        />

            <input name="region"
            id="region"
            placeholder="State"
            type="text"
            onChange={e=>setregion(e.target.value)}
            value={region}
        />

            <input name="pincode"
            id="pincode"
            placeholder="Pincode"
            type="Number"
            onChange={e=>setpincode(e.target.value)}
            value={pincode}
        />

        <button>Submit</button>

        <h2>First Name : {fname}</h2>
        <h2>Last : {lname}</h2>
        <h2>Mobile: {mobile}</h2>
        <h2>Email : {email}</h2>
        <h2>City : {city}</h2>
        <h2>State : {region}</h2>
        <h2>Pincode : {pincode}</h2>


    </div>
  )
}

export default Personal