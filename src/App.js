import { render } from '@testing-library/react';
import React, { Component, useState } from 'react'
import {Button, Grid} from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import CreateForm from './Components/CreateComponents/CreateForm';
import Home from './Components/HomeComponents/Home';
import ViewForm from './Components/ViewComponents/ViewForm';

const App = () => {

  const [name, setName] = useState('jash')

  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={CreateForm} />
          <Route path="/view" component={ViewForm} />
          {/* new */}
        </Switch>
      </BrowserRouter>
    </div>
  )

}

export default App;