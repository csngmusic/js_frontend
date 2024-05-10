import React from 'react';
import ToDoTask from './ToDoTask';

class ToDoList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }

    this.onTaskDelete = this.onTaskDelete.bind(this);
    this.onTaskAdd = this.onTaskAdd.bind(this);
  }

  componentDidMount() {
    fetch('tasks').then(function(res) {
      return res.json();
    }).then((data) => {
      this.setState({
        tasks: data
      });
    });
  }

  onTaskDelete(_id) {
    this.setState({
      tasks: this.state.tasks.filter(function(task) {
        return task._id !== _id;
      })
    });
  }

  onTaskAdd(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }
  
  render() {
    return (
      <div className="List">
        <ul>
          {
            this.state.tasks.map((task) => {
              return(
                <ToDoTask task={task} onTaskDelete = {this.onTaskDelete} key = {task._id} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default ToDoList;
