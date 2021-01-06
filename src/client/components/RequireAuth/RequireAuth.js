import React, { Component } from 'react'
import { connect } from 'react-redux'


//                    CommentBox
const requireAuth = (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount(){
            console.log('did mount/ props',this.props)
            this.Authorized()
        }
    
        Authorized(){
            const logged_in = this.props.signed_in;
            if(!logged_in){
                console.log("nav away")
               this.props.history.push('/')
            }
        }

        render(){ //  CommentBox
            return <ChildComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
    return {
        signed_in: state.authReducer.signed_in,
    };
}

    return connect(mapStateToProps)(ComposedComponent)
};

export default requireAuth;
 
//imagine we are in commentBox.js
//import requireAuth from '../'
//class CommentBox {
// ...
//...
// export requireAuth(CommentBox)

// exporting function, invoking it
////////////////////////////////////
//
// imagine we are in App.js
// import CommentBox from '../
// we are injecting another component inside the hiearchy

//HOC steps
//write the steps you want to reuse into a component
//create a HOC and add the HOC scaffold
//move the reusable logic into the HOC
//pass props/config/behavior through to child component