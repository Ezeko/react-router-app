import React from 'react'
import NavBar from '../nav/NavBar'
import ProjectList from './projects/ProjectList'
import Notifications from '../Notifications'

const Dashboard = () => {
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


export default Dashboard