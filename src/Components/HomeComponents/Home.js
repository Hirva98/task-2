import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

// functional component
const Home = () => {

    const history = useHistory()

    // other necessary functions(toredirect)
    const redirectToComponent = (url) => {
      history.push(url)
    }
    //home page having two buttons View and Create
    //view button will take user to a new page to show all records in a table 
    //create button will lead user to a page where a form will be asked to fill  
    return(
        <div style={{marginTop: "250px"}}>
      <Grid container> 
        <Grid item md={5}></Grid>
        <Grid item xs={12} md={1}>
          <Button variant="contained" color="primary" className="my-main-btn" onClick={() => {redirectToComponent('/view')}}>
            View
          </Button>
        </Grid>
        <Grid item md={5}></Grid>
      </Grid>
      <Grid container>
        <Grid item md={5}></Grid>
        <Grid item xs={12} md={1}>
          <Button variant="contained" color="primary" className="my-main-btn" onClick={() => {redirectToComponent('/create')}}>
            Create
          </Button>
        </Grid>
        <Grid item md={5}></Grid>
      </Grid>
        </div>
    )
}

export default Home