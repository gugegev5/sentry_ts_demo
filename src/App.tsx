import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        throw new Error('hello ts sentry')
      }}>
        test1
      </button>
    </div>
  );
}

export default App;
