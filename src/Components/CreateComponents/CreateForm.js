import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

//createcomponent
const CreateForm = () => {

    const history = useHistory()
    const classes = useStyles();

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [dob, setDob] = React.useState()
    const [description, setDescription] = React.useState('')

    //saves data of form to cookies and redirect 
    const submitDataandRedirect= (url)=>{         
        
        history.push(url)
        var data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dob: dob,
            description: description
        }

        // this is when you already have data... so you update your cookie
        if (localStorage.getItem('users')) {
            
            var prevData = JSON.parse(localStorage.getItem('users'))
            prevData[prevData.length] = data
            localStorage.setItem('users', JSON.stringify(prevData))

        } 
        // this is when you have NO data... 
        else {

            var newData = []
            newData[0] = data
            localStorage.setItem('users', JSON.stringify(newData))
            
        }
        //to set form to empty after each entry
        setFirstName("")         
        setLastName("")         
        setEmail('')        
        setDob('')        
        setDescription('')
    }
    //form of user details and save button that saves data and redirects to home 
    
    return(

        
        <div style={{marginTop: "150px"}}>
            <form className={""} noValidate autoComplete="off">


                <Grid container>
                    <Grid item xs={12} sm={4}></Grid>
                    <Grid item xs={12} sm={4}>
                    <Typography variant="h4" component="h2" >
                       Create User
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}></Grid>
                </Grid>


                <Grid container>
                <Grid item xs={12} sm={4}></Grid>
                    <Grid item xs={12} sm={4}>



                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <TextField id="standard-basic" label="Firstname" style={{width: "90%"}} value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="standard-basic" label="Lastname" style={{width: "90%"}} value={lastName} onChange={e => setLastName(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="standard-basic" label="Email" style={{width: "90%"}} value={email} onChange={e => setEmail(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="date" type="date" className={classes.TextField} label="DOB" style={{width: "90%"}} value={dob} onChange={e=> setDob(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField id="standard-basic" label="Description" style={{width: "90%"}} value={description} onChange={e=>setDescription(e.target.value)}/>    
                        </Grid>
                    </Grid>


                    </Grid>
                   
                </Grid>

           
            <Grid container>
                <Grid item md={4}></Grid>
                <Grid item md={1}>
                    <Button variant="contained" size="small" className="my-homebtn" onClick={()=>submitDataandRedirect('/')}>Save</Button>
                </Grid>
                <Grid item md={1}></Grid>
             </Grid>
            </form>
        </div>
       
    )
}

export default CreateForm