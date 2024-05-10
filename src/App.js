import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ToDoList from './ToDoList';
import ToDoTaskAdd from './ToDoTaskAdd';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element = {<ToDoList />} />
            <Route path="/add" element = {<ToDoTaskAdd />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
