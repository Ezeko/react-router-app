import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const ProjectList = ({projects}) => {
    //console.log('projects ', projects)
    return(
        <div className='section'>
            {projects !== undefined && projects.length > 0 ? projects.map((project)=>{
                return(
                    
                <div className="row" key={project.id}>
                {console.log(project.createdAt)}
                <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">{project.title}</span>
                    <h6>{console.log(moment((new Date(project.createdAt.seconds * 1000))).fromNow()
                    )}</h6>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>

                    </div>
                    <div className="card-action">
                    <a><h6>Author: {project.authorName}</h6></a>
                    <a><h6>
                    posted: {
                        moment((new Date(project.createdAt.seconds * 1000))).fromNow()
                        
                    }</h6></a>
                    </div>
                </div>
                </div>
            </div>
                )
            }) : console.log('no project') }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects'}])
)(ProjectList)