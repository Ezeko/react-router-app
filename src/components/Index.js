import React, {useState} from 'react'
import { NavLink, Prompt } from 'react-router-dom'

const Index = () => {
    const [inputValue, setInputValue] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        e.target.reset();
        setInputValue('');
    }
    return(
        <div className="App">
            <nav className="black dark">
                <NavLink to='/home' > Go to home page</NavLink>
            </nav>
            <Prompt when={inputValue} message='Are you sure you want to leave this page?' />
            
            <div className='container'>
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder='type here to test transition blocker' onChange={(text)=> setInputValue(text)}/>
                </form>

            </div>
        </div>
    )
}

export default Index