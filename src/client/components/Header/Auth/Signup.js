import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as ACTIONS from '../../../../store/actions/actions'

//compose helper allows us to write out mulitiple HOC with much
//better syntax than if we tried to maunally chain them all together
//in short: allows us to apply mutliple HOC to a single component

class Signup extends Component{

    onSubmit = (formProps) => {
        //console.log(formProps)
        this.props.sign_up(formProps)
    }

    render(){
        //console.log('form props',this.props)
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <fieldset>
                    <label>Email</label>
                    <Field
                      name="email"
                      type="text"
                      component="input"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                      name="password"
                      type="password"
                      component="input"
                    />
                </fieldset>
                <button type="submit" >Sign Up</button>
            </form>
        )
    }
}



export default compose(connect(null,ACTIONS),reduxForm({form: 'signup'}))(Signup)
