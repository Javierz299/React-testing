import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as ACTIONS from '../../store/actions/actions'

class CommentBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: '',
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveComment(this.state.comment)

        this.setState({
            comment: ''
        })
    };
    
    handleChange = (e) => {

        this.setState({
            comment: e.target.value,
        })

    };

    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add comment</h4>
                <textarea value={this.state.comment} 
                    onChange={this.handleChange}
                />
                <div>
                    <button type="button" >Submit Comment</button>
                </div>
            </form>
            <button className="fetch_comments"
                onClick={() => this.props.fetchComments()}
                type="button" >
                Fetch Comments
            </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        saveComment: (txt) => dispatch(ACTIONS.save_comment(txt)),
        fetchComments: () => dispatch(ACTIONS.fetch_comments())
    }
}

export default connect(null,mapDispatchToProps)(CommentBox)
