import React from 'react'
import {NavLink} from 'react-router-dom'
import SignedOut from './signedOut'
import SignedIn from './signedIn'


const NavBar = () => {
    return(
        <nav className="black dark ">
            <ul >
                <li><NavLink className='left nav' to='/dashboard' > Go to Dashboard</NavLink></li>
                
                <SignedOut />
                <SignedIn />
                
                
            </ul>
            
        </nav>
    )
}

export default NavBar