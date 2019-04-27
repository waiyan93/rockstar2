import React, { Component } from 'react';

class App extends Component {
  autoId = 5;
  state = {
    tasks: [
      { _id: 1, subject: "Milk", status: 0 },
      { _id: 2, subject: "Cup", status: 0 },
      { _id: 3, subject: "Tobacco", status: 1 },
      { _id: 4, subject: "Honey", status: 1 },
      { _id: 5, subject: "Alcohol", status: 0 }
    ],
    subject: ""
  }
  handleChange = (event) => {
    this.setState({
      ...this.state,
      subject: event.target.value
    })
  }
  add = () => {
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject: this.state.subject })
    }).then(res => res.json()).then(json => {
      this.setState({
        ...this.state,
        tasks: [json, ...this.state.tasks],
        subject: ""
      })
    })

  }
  done = (_id) => {
    fetch(`http://localhost:8000/tasks/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: 1 })
    }).then(res => res.json()).then(json => {
      this.setState({
        ...this.state,
        tasks: this.state.tasks.map(task => {
          if (task._id === _id) {
            task.status = 1;
          }
          return task;
        })
      })
    })
  }
  undo = (_id) => {
    fetch(`http://localhost:8000/tasks/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: 0 })
    }).then(res => res.json()).then(json => {
      this.setState({
        ...this.state,
        tasks: this.state.tasks.map(task => {
          if (task._id === _id) {
            task.status = 0;
          }
          return task;
        })
      })
    })
  }
  remove = (_id) => {
    fetch(`http://localhost:8000/tasks/${_id}`, {
      method: "DELETE"
    }).then(res => res.json()).then(json => {
      this.setState({
        ...this.state,
        tasks: this.state.tasks.filter(task => task._id !== _id)
      })
    })
  }
  clear = () => {
    fetch("http://localhost:8000/tasks", {
      method: "DELETE"
    }).then(res => res.json()).then(json => {
      this.setState({
        ...this.state,
        tasks: this.state.tasks.filter(task => task.status === 0)
      })
    })
  }
  componentWillMount() {
    fetch("http://localhost:8000/tasks").then(res => res.json()).then(json => {
      this.setState({
        ...this.state,
        tasks: json
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <div>
          <h4>Todos</h4>
          <ul>
            {this.state.tasks.map(task => {
              if (task.status === 0) {
                return (
                  <li key={task._id}>
                    <input type="checkbox" onChange={() => this.done(task._id)} />
                    {task.subject}
                    <button onClick={() => this.remove(task._id)}>x</button>
                  </li>
                )
              }
            })}
          </ul>
        </div>
        <hr />
        <div>
          <h4>Done</h4>
          {this.state.tasks.map(task => {
            if (task.status === 1) {
              return (
                <li key={task._id}>
                  <input type="checkbox" onChange={() => this.undo(task._id)} checked />
                  {task.subject}
                  <button onClick={() => this.remove(task._id)}>x</button>
                </li>
              )
            }
          })}
        </div>
        <div>
          <input type="text" onChange={this.handleChange} value={this.state.subject} />
          <button onClick={this.add}>Add Task</button>
        </div>
        <button onClick={this.clear}>Clear All</button>
      </div>
    );
  }
}

export default App;
