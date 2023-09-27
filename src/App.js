
import './App.css';
import {useState} from 'react';
import Form from './component/Form';

function App() {

  const [fname,setfname]=useState('');
  const [lname,setlname]=useState('');
  // for first Name
  const handleChangefname= e =>{
    setfname(e.target.value)
  }
  // for Last Name
  const handleChangelname= e =>{
    setlname(e.target.value)
  }
  return (
    <div className="App">

      <h1>Sapartae input button and taking them one by one</h1>
      {/* this is section where i used saparate input values and performed opertion on them */}
      <label>First Name</label>
      
      <input type="text"
        id="fname"
        name="fname"
       placeholder="First Name"
       onChange={handleChangefname}
       value={fname} />

      <label>Last Name</label>
      
      <input type="text"
        id="lname"
        name="lname"
       placeholder="Last Name"
       onChange={handleChangelname}
       value={lname} />
      <h3>Name is :{fname} {lname} </h3>
      
      <hr />
      <br />

      <h1> second part with full form using submit button</h1>
      <Form />

    </div>
  );
}

export default App;
