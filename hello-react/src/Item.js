import React from 'react';

class Item extends React.Component {
    render() {
        return (
            // call the child's property
            <li>{this.props.name}</li>
        );
    }
}

export default Item;