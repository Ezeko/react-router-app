import React, {useState} from 'react'
import { connect } from 'react-redux'
import NavBar from '../nav/NavBar'
import { signUp } from '../../store/actions/authActions'

const SignUp = (props) => {
    const [state, setState] = useState({
        email: null,
        password: null,
        authorName: null
    })
    const handleChange = (e) => {
        
        setState({
            ...state,
            [e.target.id] : e.target.value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.register({...state})
        props.history.push('/dashboard')
    }

    if (props.auth.uid) {
        return null
    }


    return (
        <div>
        {//console.log(props)
        //console.log(state)
        }
            <NavBar />
            <div className='container'>
                <form onSubmit={handleSubmit} className='container'>
                    <div className='input-field col s6'>
                        <label htmlFor='authorName'> Author Name</label>
                        <input type='text' id='authorName' onChange={handleChange}  required />
                    </div>
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
                        <input type='submit' className='waves-effect waves-light btn' value='Sign Up' />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(signUp(user))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)