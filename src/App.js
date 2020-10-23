import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Index from './components/Index'
import Dashboard from './components/dashboard'

import './App.css';
import ProjectDetail from './components/dashboard/projects/ProjectDetail';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/project/:id' component={ProjectDetail} />
      <Route path='/login' component={SignIn} />
      <Route path='/register' component={SignUp} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/home' component={Home}/>
      <Route path='/' component={SignIn} />
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
