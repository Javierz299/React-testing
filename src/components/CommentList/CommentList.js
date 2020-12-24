import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component{
    

    renderComments = () => {
        console.log('render',this.props.comments)
        return this.props.comments.map((comment, i) => {
            return <li key={i}>{comment}</li>
        })
    }

    render(){
        return (
            <div>
                <h4>Comment List</h4>
               {this.renderComments()}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state',state)
    return {
        comments: state.commentsReducer.comments
    }
}

export default connect(mapStateToProps)(CommentList)
