import React from 'react';
import Item from './Item';

class Done extends React.Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map(task => <Item
                    key={task.id}
                    task={task}
                    remove={this.props.remove}
                    undo={this.props.undo} />
                )}
            </ul>
        );
    };
}
export default Done;