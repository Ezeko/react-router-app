import React from 'react'
import NavBar from '../nav/NavBar'
import ProjectList from './projects/ProjectList'
import Notifications from './Notifications'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Dashboard = ({auth, projects, notifications}) => {
    if (auth.isLoaded && !auth.uid) {
        return <Redirect to='/login' />
    }
    return(
        <div className='App'>
            <NavBar />

            <div className='container row'>
                <div className="col l6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col l6">
                    <Notifications notifications={notifications}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps),
firestoreConnect([
    {collection: 'projects', orderBy: ['createdAt', 'desc']},
    {collection: 'notifications', orderBy: ['createdAt', 'desc'], limit: 5}
])
)(Dashboard)
