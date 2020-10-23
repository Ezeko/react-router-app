import React from 'react'
import {NavLink} from 'react-router-dom'


const SignedOut = () => {
    return(
        <ul className='right'>
            <li>
                <NavLink to='/login' > SignIn</NavLink>
            </li>
            <li>
                <NavLink  to='/signup' > Register </NavLink>
            </li>
        </ul>
    )
}

export default SignedOut