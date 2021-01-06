import React from 'react'
import requireAuth from '../RequireAuth/RequireAuth'

const Feature = () => {
    return (
        <div>
            Welcome to this feature!
        </div>
    )
}

export default requireAuth(Feature)
