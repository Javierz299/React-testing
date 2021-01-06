import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Welcome from './components/Header/Welcome/Welcome'
import Signup from './components/Header/Auth/Signup'
import Signout from './components/Header/Auth/Signout'
import Feature from './components/Feature/Feature'

class App extends Component{

render(){
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/feature" component={Feature}  />
                <Route path="/signout" component={Signout} />
            </Switch>
        </div>
    )
}
  
}

export default App
