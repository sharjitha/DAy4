import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'

const Add = () => {
  const [count,setCount]=useState(0);
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }
  const [form,setForm]=useState(
    {
    fname:'',
    middlename:'',
    lastname:''
  }
)
  function valueCap(e)
  {
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
    console.log(form)
  }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="standard-required"
          label="Student-name"
          //defaultValue="Hello World"
          //variant="standard"
          name="fname"
          onChange={valueCap}
        />
        <TextField
           required
           id="standard-required"
           label="Department"
           //defaultValue="Hello World"
           //variant="standard"
           name="Department"
           onChange={valueCap}
        />
        <TextField
           required
           id="standard-required"
           label="Sem"
           //defaultValue="Hello World"
           //variant="standard"
           name="Sem"
           onChange={valueCap}
        />
        <Button variant="contained" color="success" onClick={valueAdd}>submit</Button>
        <br/>
        {/* <small>Count is {count}</small> */}
        <br/>
      </div>
    </Box>
    </div>
  )
}
export default Add