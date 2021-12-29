import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}
