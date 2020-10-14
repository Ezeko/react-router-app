import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Index from './components/Index'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/' component={Index} />
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
