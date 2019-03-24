import React from 'react';

class Clear extends React.Component {
    render() {
        return (
            <button onClick={this.props.clear}>Clear All</button>
        );
    };
}

export default Clear;