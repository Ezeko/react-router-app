import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Spinner from '../../loaders/Spinner'

const ProjectList = ({projects}) => {
    //console.log('projects ', projects)
    return(
        <div className='section'>
            {projects !== undefined && projects.length > 0 ? projects.map((project)=>{
                return(
                <Link to={`/project/${project.id}`} >
                    <div className="row hoverable" key={project.id}>
                    {console.log(project.createdAt)}
                    <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{project.title}</span>

                        </div>
                        <div className="card-action">
                        <Link to='#'><h6>Author: {project.authorName}</h6></Link>
                        <Link to='#'><h6>
                        posted: {
                            moment((new Date(project.createdAt.seconds * 1000))).fromNow()
                            
                        }</h6></Link>
                        </div>
                    </div>
                    </div>
                    </div>
                </Link>
                )
            }) : <Spinner /> }
            
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