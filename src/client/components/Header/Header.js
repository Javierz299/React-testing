import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const state = useSelector(state => state.authReducer.authenticated)

    console.log("state from header",state)


    return (
        <div>
            <Link to="/" >Redux Auth</Link>
            <Link to="/signup" >Sign up</Link>
            {state === "" ?
            <Link to="/signin" >Sign in</Link> :
            <Link to="/signout" >Sign out</Link>
            }
            
            <Link to="/feature" >Feature</Link>
        </div>
    )
}

export default Header
