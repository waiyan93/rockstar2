import React from 'react';
import Item from './Item';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

class Todo extends React.Component {
    todosTitle = <ListSubheader>Todos</ListSubheader>
    render() {
        return (
            <List subheader={this.todosTitle}>
                {this.props.tasks.map(task => <Item
                    key={task.id}
                    task={task}
                    remove={this.props.remove}
                    done={this.props.done} />
                )}
            </List>
        )
    };
}

export default Todo;