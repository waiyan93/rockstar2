import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import TaskActions from './actions/TaskActions';

class Item extends React.Component {
    render() {
        return (
            <ListItem>
                {
                    this.props.task.status === 1
                        ? <Checkbox
                            checked={1}
                            disableRipple
                            onChange={() => this.props.undo(this.props.task.id)}
                        />
                        : <Checkbox
                            checked={0}
                            disableRipple
                            onChange={() => this.props.done(this.props.task.id)}
                        />
                }
                <ListItemText primary={this.props.task.subject} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Remove" onClick={() => {
                        this.props.remove(this.props.task.id);
                    }}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        done: (id) => { dispatch(TaskActions.done(id)) },
        undo: (id) => { dispatch(TaskActions.undo(id)) },
        remove: (id) => { dispatch(TaskActions.remove(id)) }
    }

}
export default connect(null, mapDispatchToProps)(Item);