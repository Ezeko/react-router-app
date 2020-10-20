import React, {useState} from  'react'
import { NavLink, Prompt } from 'react-router-dom'
import {connect} from 'react-redux'

const Index = (props) => {
    console.log(props)
    console.log(props.project)
    const [state, setState] = useState({isEmpty: false, something: ''});
    const submitHandler = (e) => {
        e.preventDefault();
        e.target.reset();

        setState({isEmpty: false})
    }
    return(
        <div className="App">
        {//console.log(state.something)
        }
            <nav className="black dark">
                <NavLink to='/home' > Go to home page</NavLink>
            </nav>
            <Prompt when={state.isEmpty} message='Are you sure you want to leave this page?' />
            
            
            <div className='container'>
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder='type here to test transition blocker' onChange = {(text)=>{
                    setState({isEmpty: true, something: text.target.value})
                    }}/>
                </form>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        project: state.project
    }
}
export default connect(mapStateToProps)(Index) 