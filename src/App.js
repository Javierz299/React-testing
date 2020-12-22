import React, { Component } from 'react'
import CommentBox from './components/CommentBox/CommentBox'
import CommentList from './components/CommentList/CommentList'

class App extends Component {
  
  render(){
    return (
      <div className="App">
          <CommentBox />
          <CommentList />
      </div>
    );
  }

}

export default App;
