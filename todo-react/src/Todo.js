import React from 'react';
import Item from './Item';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';


const Todo = (props) => {
    let todosTitle = <ListSubheader>Todos</ListSubheader>;
    return (
        <List subheader={todosTitle}>
            {props.tasks.map(task => <Item
                key={task.id}
                task={task}
            />
            )}
        </List>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.filter(task => task.status === 0)
    }
}

export default connect(mapStateToProps)(Todo);