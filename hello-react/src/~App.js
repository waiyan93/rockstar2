import React from 'react';
import List from './List';

class App extends React.Component {
    constructor() {
        super();
        this.input = React.createRef();
        this.state = {
            data: ['Milk', 'Egg', 'Carrot'],
        }
        this.add = this.add.bind(this);
    }
    add() {
        this.setState({
            data: [
                ...this.state.data,
                this.input.current.value
            ]
        })
        this.input.current.value = '';
    }
    render() {
        return (
            <div>
                <List data={this.state.data} />
                <input type="text" ref={this.input} />
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}

export default App;
