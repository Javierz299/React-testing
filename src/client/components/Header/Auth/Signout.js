import React, { Component } from 'react'
import * as ACTIONS from '../../../../store/actions/actions'
import { connect } from 'react-redux'

class Signout extends Component{
    componentDidMount(){
        this.props.sign_out()
        console.log('sign out props',this.props)
    }

    render(){
        return (
            <div>
                Signed out!
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        sign_out: () => dispatch(ACTIONS.sign_out())
}
}

export default connect(null,mapDispatchToProps)(Signout);
