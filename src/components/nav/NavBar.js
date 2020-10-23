import React from 'react'
import {NavLink} from 'react-router-dom'
import SignedOut from './signedOut'
import SignedIn from './signedIn'
import { connect } from 'react-redux'


const NavBar = (props) => {
    //console.log('props', props.auth)
    return(
        <nav className="black dark ">
            <ul >
                <li><NavLink className='left nav' to='/dashboard' > {props.auth.uid ? 'Dashboard' : 'HOME' }</NavLink></li>
                {props.auth.uid ? 
                <SignedIn />
                :
                <SignedOut />
                }
                
                
            </ul>
            
        </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(NavBar)