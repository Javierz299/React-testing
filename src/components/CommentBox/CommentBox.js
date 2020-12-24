import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import * as ACTIONS from '../../store/actions/actions'

class CommentBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: '',
        };

    }

    componentDidMount(){
        console.log('did mount')
        this.unAuthorized()
    }

    unAuthorized(){
        const logged_in = this.props.signed_in;

        if(!logged_in){
            console.log("nav away")
           this.props.history.push('/')
        }

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

function mapStateToProps(state){
    return {
        signed_in: state.authReducer.signed_in,
    }
}

function mapDispatchToProps(dispatch){
    return {
        saveComment: (txt) => dispatch(ACTIONS.save_comment(txt)),
        fetchComments: () => dispatch(ACTIONS.fetch_comments())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentBox)
