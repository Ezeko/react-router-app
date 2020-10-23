import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {signOut} from '../store/actions/authActions'

const SignedIn = (props) => {
    
    console.log('props', props.auth)
    return(
        <ul className='right'>
            <li>
                <NavLink  to='/create' > Create Blog </NavLink>
            </li>
            
            <li>
                <NavLink  to='/' onClick={props.signOut}> Logout </NavLink>
            </li>
            <li>
                <NavLink className='btn btn-floating' to='/dashboard' > EZ </NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{

    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(SignedIn) 