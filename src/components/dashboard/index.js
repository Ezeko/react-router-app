import React from 'react'
import NavBar from '../nav/NavBar'
import ProjectList from './projects/ProjectList'
import Notifications from '../Notifications'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

const Dashboard = ({auth}) => {
    if (!auth.uid) {
        return <Redirect to='/login' />
    }
    return(
        <div className='App'>
            <NavBar />

            <div className='container row'>
                <div className="col l6">
                    <ProjectList />
                </div>
                <div className="col l6">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard)