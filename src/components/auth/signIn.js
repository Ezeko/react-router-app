import React, {useState} from 'react'
import NavBar from '../nav/NavBar'
import {signIn} from '../../store/actions/authActions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

const SignIn = (props) => {
    const [state, setState] = useState({
        email: null,
        password: null
    })
    const handleChange = (e) => {
        
        setState({
            ...state,
            [e.target.id] : e.target.value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signIn({...state});
    }

    if (props.auth.uid){
        return <Redirect to='/dashboard' />
    }
    
    return (
        <div>
        {//console.log(props)
        }
            <NavBar />
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='input-field col s6'>
                        <label htmlFor='email'> Email</label>
                        <input type='email' id='email' onChange={handleChange}  required />
                    </div>
                    <div className='input-field col s6'>
                        <label htmlFor='password'> Password</label>
                        <input type='password' id='password' 
                        onChange={handleChange} required />
                    </div>
                    <div className='input-field col s6'>
                        <input type='submit' className='waves-effect waves-light btn' value='Sign IN' />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user) => dispatch(signIn(user))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)