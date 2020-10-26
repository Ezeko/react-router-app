import React, {useState} from 'react'
import NavBar from '../../nav/NavBar'
import {Prompt } from 'react-router-dom'


const CreateProject = (props) => {
    const [state, setState] = useState({
        isEmpty: true
    })
    const handleChange = (e) => {
        setState({
            [e.target.id] : e.target.value,
            isEmpty: false
        })
    }

    const handleSubmit = async ( e ) =>{

       await e.target.reset();
        e.preventDefault();
        setState({
            ...state,
            isEmpty: true
        });

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


export default CreateProject