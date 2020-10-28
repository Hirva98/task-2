import { Button, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//view component
const ViewForm = ()=> {
 
    const history = useHistory()
    
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('users'))) //to get data from localstorage

    const redirectToComponent= (url) => {
        history.push(url)
    }
    //table of records and a link back to home page
    return(
        <div style={{marginTop: "100px"}}>
          
          <Grid container>            
            <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="left" className="title">
                        User Data
                    </Typography>
              <TableContainer component={Paper} style={{width: "80%", margin: "auto"}}>
                <Table aria-label="simple table">
                  <TableHead >
                    <TableRow>
                      <TableCell style={{fontWeight: "bold"}}>Firstname</TableCell>
                      <TableCell style={{fontWeight: "bold"}}>Lastname</TableCell>
                      <TableCell style={{fontWeight: "bold"}}>Email</TableCell>
                      <TableCell style={{fontWeight: "bold"}}>DOB</TableCell>
                      <TableCell style={{fontWeight: "bold"}}>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                     {/* to display all records from cookie */}

                    {userData.map((user, key) => (
                      <TableRow key={key}>
                        <TableCell component="th" scope="row">
                          {user.firstName}
                        </TableCell>
                        <TableCell >{user.lastName}</TableCell>
                        <TableCell >{user.email}</TableCell>
                        <TableCell >{user.dob}</TableCell>
                        <TableCell >{user.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          {/* <Grid container> */}
            {/* <Grid item md={1}> */}
              <div style={{width: "80%", margin: "20px auto"}}>
                <Typography>
                  <Link color="primary" variant="body2" to="/">Back</Link>
                </Typography>
                
              </div>
            {/* </Grid> */}
          {/* </Grid> */}
        </div>
    )
}

export default ViewForm