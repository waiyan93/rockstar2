import React from 'react';
import Item from './Item';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';


const Done = (props) => {
    let doneTitle = <ListSubheader>Done</ListSubheader>;
    return (
        <List subheader={doneTitle}>
            {props.tasks.map(task => <Item
                key={task._id}
                task={task}
            />
            )}
        </List>
    );
}
const mapStateToProps = (state) => {
    return {
        tasks: state.filter(task => task.status === 1)
    }
}

export default connect(mapStateToProps)(Done);