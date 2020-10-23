import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedIn = () => {
    return(
        <ul className='right'>
            <li>
                <NavLink  to='/create' > Create Blog </NavLink>
            </li>
            <li>
                <NavLink className='btn btn-floating' to='/dashboard' > EZ </NavLink>
            </li>
            <li>
                <NavLink  to='/signout' > Logout </NavLink>
            </li>
        </ul>
    )
}

export default SignedIn