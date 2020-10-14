import React, {useState} from 'react'
import { NavLink, Prompt } from 'react-router-dom'

const Index = (props) => {
    console.log(props)
    const [isEmpty, setIsEmpty] = useState(false);
    const[something, setSomething] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        e.target.reset();

        setIsEmpty(false)
    }
    return(
        <div className="App">
        {console.log(something)}
            <nav className="black dark">
                <NavLink to='/home' > Go to home page</NavLink>
            </nav>
            <Prompt when={isEmpty} message='Are you sure you want to leave this page?' />
            
            <div className='container'>
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder='type here to test transition blocker' onChange = {(text)=>{setIsEmpty(true)
                    setSomething(text.target.value)
                    }}/>
                </form>

            </div>
        </div>
    )
}

export default Index