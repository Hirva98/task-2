import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Firstname, Lastname, Email, DOB, Description) {
  return { Firstname, Lastname, Email, DOB, Description };
}

const ViewForm = ()=> {
 
    const history = useHistory()

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('users')))

    const redirectToComponent= (url) => {
        history.push(url)
    }
    console.log(userData)
    return(
        <div style={{marginTop: "200px"}}>
          
          <Grid container>            
            <Grid item xs={12}>
              <TableContainer component={Paper} style={{width: "80%", margin: "auto"}}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Firstname</TableCell>
                      <TableCell >Lastname</TableCell>
                      <TableCell >Email</TableCell>
                      <TableCell >DOB</TableCell>
                      <TableCell >Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

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
                <Button   className="my-btn" onClick={()=>{redirectToComponent('/')}}>
                  Back
                </Button>
              </div>
            {/* </Grid> */}
            
          {/* </Grid> */}
        </div>
    )
}

export default ViewForm