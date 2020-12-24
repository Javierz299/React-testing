import React from 'react'
import { Link } from 'react-router-dom'
import SignInButton from '../SignInButton/SignInButton'

const Header = () => {
    return (
        <div>
            <span>
                <Link to="/" >Home</Link>
            </span>
            <span>
                <Link to="/post">Post a Comment</Link>
            </span>
            <span>
                <SignInButton />
            </span>
        </div>
    )
}

export default Header
