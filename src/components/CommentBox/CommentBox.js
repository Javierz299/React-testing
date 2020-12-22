import React, { Component } from 'react'

class CommentBox extends Component {
    constructor(props){
        super(props)

        this.state = {
            comment: '',
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();

        //call an action creator
        //and save the comment

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
            <form onSubmit={this.handleSubmit}>
                <h4>Add comment</h4>
                <textarea value={this.state.comment} 
                    onChange={this.handleChange}
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox
