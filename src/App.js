import React from 'react'
import './assets/css/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PageNotFound from './Components/PageNotFound';
import Login from './Components/Login';
import svg404 from './assets/svgs/404.svg'
import loginSVG from './assets/svgs/user_front.svg'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
              <Login svg = {loginSVG}/>
          </Route>
          <Route exact path="/">
            
          </Route>
          <Route>
            <PageNotFound svg = {svg404}/>
          </Route>
        </Switch>
    </Router>
    </div>
  )
}

export default App
