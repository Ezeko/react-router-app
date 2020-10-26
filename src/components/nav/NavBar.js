import React from 'react'
import {NavLink} from 'react-router-dom'
import SignedOut from './signedOut'
import SignedIn from './signedIn'
import { connect } from 'react-redux'
import Progress from '../loaders/Progress'


const NavBar = ({auth, users}) => {
    //console.log('props', auth.isLoaded)
    
    const initial = users.initials

    if (!auth.isLoaded) {
        return <Progress />
    }
    return(
        <nav className="black dark ">
            <ul >
            {//console.log(initial)
            }
                <li><NavLink className='left nav' to='/dashboard' > {auth.uid ? 'Dashboard' : 'HOME' }</NavLink></li>
                {auth.isLoaded && auth.uid  ? 
                <SignedIn initial={initial}/>
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
        auth: state.firebase.auth,
        users: state.firebase.profile
    }
}
export default connect(mapStateToProps)(NavBar)