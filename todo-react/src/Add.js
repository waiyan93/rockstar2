import React from 'react';

class Add extends React.Component {
    input = React.createRef();
    render() {
        return (
            <div>
                <input type="text" ref={this.input} placeholder="Enter Subject" />
                <button onClick={() => {
                    let subject = this.input.current.value;
                    this.props.add(subject);
                    this.input.current.value = "";
                }}>+</button>
            </div>
        )
    };
}

export default Add;