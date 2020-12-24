import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const SignInButton = () => {
    const state = useSelector(state => state.authReducer.signed_in)
    const dispatch = useDispatch()

    useEffect(() => {
       
      
    }, [state])

    return (
        <div>
            {!state ? 
            <button onClick={() => dispatch({type: 'SIGN_IN'})}>Sign In</button> :
            <button onClick={() => dispatch({type: 'SIGN_OUT'})}>Sign out</button>
        }
        </div>
    )
}

export default SignInButton
