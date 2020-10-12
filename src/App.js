import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
      <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
