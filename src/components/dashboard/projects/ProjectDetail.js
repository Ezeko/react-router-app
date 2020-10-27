import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import NavBar from '../../nav/NavBar'
import Progress from '../../loaders/Progress'


const ProjectDetail = (props) => {
    const {project} = props
    
    //console.log('props :', project)
    const show = project ? <div className="row">
    <div className="col s12">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>

                </div>
                <div className="card-action">
                    <Link to='#'><h6>Author: {project.authorName}</h6></Link>
                    <Link to='#'><h6>
                    posted: {
                        moment(((project.createdAt.toDate()))).startOf('day').fromNow()
                        
                    }</h6>
                </Link>
            </div>
        </div>
    </div>
</div> : <Progress />

    return (
        <div>
        <NavBar />
        {show}
        </div>
        
    )
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    let data
    const projects = state.firestore.data.projects
    if ( projects ) {
        data = state.firestore.data.projects[id]
    }
    //console.log('state', data)
    return {
        project: data
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects'}])
)(ProjectDetail)