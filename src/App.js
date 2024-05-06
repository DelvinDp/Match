import './App.css'
// import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamCard from './components/TeamCard'
import LatestMatch from './components/LatestMatch'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={TeamCard} />
      <Route path="/team-matches/:id" component={LatestMatch} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
