import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Page2 from './../Page2'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/page2' component={Page2}/>
  </Switch>
)
export default Router