import React from 'react';
import Item from './Item';

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.data.map((item, index) => <Item key={index} name={item} remove={this.props.remove} />)}
            </ul>
        )
    }
}

export default List;