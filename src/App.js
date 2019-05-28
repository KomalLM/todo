import React from 'react';
import './App.css';
import TodoListContainer from './component/TodoListcontainer';

function App() {
  return (
    <div className="App">
        <p> My to do list </p>

        <TodoListContainer />


    </div>
  );
}

export default App;
