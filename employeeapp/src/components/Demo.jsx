import React, { useEffect , useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


  
  
  const Demo = () => {
    const [rows,setRows]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((res)=>{
            setRows(res.data.users)
        })
    },[])

    
    return (
      <div><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead> 
          <TableRow sx={{ '& td, & th' : { border: 2 } }}> 
            <TableCell><b>FIRST_NAME</b></TableCell>
            <TableCell align="right"><b>LAST_NAME</b></TableCell>
            <TableCell align="right"><b>GENDER</b></TableCell>
            <TableCell align="right"><b>EMAIL</b></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ ' & td , & th ': { border : 2} }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
    )
  }

  export default Demo