import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Spinner from '../../loaders/Spinner'

const ProjectList = ({projects}) => {
    //console.log('projects ', projects)
    
    return(
        <div className='section'>
            {projects !== undefined && projects.length > 0 ? projects.map((project)=>{
                return(
                <Link to={`/project/${project.id}`} key={project.id}>
                    <div className="row hoverable" >
                    <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{project.title}</span>

                        </div>
                        <div className="card-action">
                        <h6>Author: {project.authorName}</h6>
                        <h6>
                        posted: {
                            moment(((project.createdAt.toDate()))).calendar()
                            
                        }</h6>
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



export default ProjectList