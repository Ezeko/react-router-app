import React, {useState} from 'react'
import NavBar from '../../nav/NavBar'
import {Prompt } from 'react-router-dom'
import { connect } from 'react-redux'
import { createProject } from '../../../store/actions/projectActions'


const CreateProject = (props) => {
    const [state, setState] = useState({
        isEmpty: true
    })
    
    //console.log(props)
    const handleChange = (e) => {
        //console.log(state)
        setState({
            ...state,
            [e.target.id] : e.target.value,
            isEmpty: false
        })
    }

    const handleSubmit = async ( e ) =>{
        await setState({
            ...state,
            isEmpty: true
        });

        e.persist();
        

        props.create({title: state.title, content: state.content})
        props.history.push('/dashboard')
    }


    return (
        <div>
            <NavBar />
            <Prompt when={!state.isEmpty} message='Are you sure you want to leave this page? You have unsaved work!!' />
            <form onSubmit={handleSubmit} className='container'>
                    <div className='input-field col s6'>
                        <label htmlFor='title'> Title</label>
                        <input type='text' id='title' onChange={handleChange}  required />
                    </div>
                    <div className='input-field col s6'>
                        <label htmlFor='content'> Content</label>
                        <textarea id='content' className='materialize-textarea' rows="4" cols="50" onChange={handleChange} required/>
                    </div>
                    <div className='input-field col s6'>
                        <input type='submit' className='waves-effect waves-light btn' value='Create Blog' />
                    </div>
                </form>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (project) => dispatch(createProject(project))
    }
}


export default connect(null, mapDispatchToProps)(CreateProject)