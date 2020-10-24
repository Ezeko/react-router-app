import React from 'react'
import {NavLink} from 'react-router-dom'
import SignedOut from './signedOut'
import SignedIn from './signedIn'
import { connect } from 'react-redux'
import {compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


const NavBar = ({auth, users}) => {
    console.log('props', users)
    const initial = auth.uid && users ? users[auth.uid]?.initials : null
    return(
        <nav className="black dark ">
            <ul >
            {console.log(initial)}
                <li><NavLink className='left nav' to='/dashboard' > {auth.uid ? 'Dashboard' : 'HOME' }</NavLink></li>
                {auth.uid ? 
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
        users: state.firestore.data.users
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'users'}])
)(NavBar)