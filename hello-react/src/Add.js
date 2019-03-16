import React from 'react';

class Add extends React.Component {
    constructor() {
        super();
        // bind input value to property
        this.input = React.createRef();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.input} placeholder="Please enter data!" />
                <button onClick={() => {
                    var name = this.input.current.value;
                    this.props.add(name);
                }}>Add</button>
            </div>
        );
    }
}

export default Add;