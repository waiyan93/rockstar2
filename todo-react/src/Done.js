import React from 'react';
import Item from './Item';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

class Done extends React.Component {
    doneTitle = <ListSubheader>Done</ListSubheader>
    render() {
        return (
            <List subheader={this.doneTitle}>
                {this.props.tasks.map(task => <Item
                    key={task.id}
                    task={task}
                    remove={this.props.remove}
                    undo={this.props.undo} />
                )}
            </List>
        );
    };
}
export default Done;