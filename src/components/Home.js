import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from './ProjectList'

const Home = () => {
    return (
        <div>
            <h1>this is home</h1>
            <Link to='/'>Back to home</Link>
            <ProjectList />
        </div>
    )
}

export default Home