import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li> // call the child's property
    );
  }
}
class App extends React.Component {
  render() {
    var data = ['Bob', 'Alice', 'Tom', 'Mary'];
    return (
      <div>
        <ul>
          {data.map(item => <Item name={item} />)}
        </ul>
      </div>
    );
  }
}

export default App;
