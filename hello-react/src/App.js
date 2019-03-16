import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from './Item.js';
import Add from './Add.js';

class App extends React.Component {
  constructor() {
    // call to use this keyword
    super();
    // set state @ data
    this.state = {
      data: ['Bob', 'Alice', 'Tom', 'Mary'],
    }
    // bind this to use add method
    this.add = this.add.bind(this);
  }
  add(name) {
    var data = this.state.data;
    data.push(name);
    // change the state's data
    this.setState({
      data: data
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((item, index) => <Item name={item} />)}
        </ul>
        <Add add={this.add} />
      </div>
    );
  }
}

export default App;
