import React from 'react';
import ToDoTask from './ToDoTask';

class App extends React.Component{
  render() {

    const data = [
        {
            "_id": "6627d0dceda824e0c1cb8a65",
            "name": "test1",
            "description": "1",
            "done": false
        },
        {
            "_id": "6627d16bf4f3207a3b0b978c",
            "name": "test2",
            "description": "2",
            "done": false
        },
        {
            "_id": "6627d93b00b2deb46eca6289",
            "name": "test3",
            "description": "DESCR3",
            "done": false
        },
        {
            "_id": "66353894d0f2e7b6e5d43adb",
            "name": "test4",
            "description": "test4 bf",
            "done": true
        },
        {
            "_id": "663538b4d0f2e7b6e5d43adc",
            "name": "test5",
            "description": "test5 a",
            "done": false
        }
    ];

    function mapTodoList(task){
      return(
        <ToDoTask task={task} key = {task._id} />
      )
    }
    
    return (
      <div className="App">
        <ul>
          {
            data.map(mapTodoList)
          }
        </ul>
      </div>
    );
  }
}

export default App;
