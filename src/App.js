import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import CommentBox from './components/CommentBox/CommentBox'
import CommentList from './components/CommentList/CommentList'
import Header from './components/Header/Header'

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/post" component={CommentBox}/>
          <Route exact path="/" component={CommentList}/>
        </Switch>
      </div>
    );
  }

}

export default App;
