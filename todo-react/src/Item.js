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
                            onChange={() => this.props.undo(this.props.task._id)}
                        />
                        : <Checkbox
                            checked={0}
                            disableRipple
                            onChange={() => this.props.done(this.props.task._id)}
                        />
                }
                <ListItemText primary={this.props.task.subject} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Remove" onClick={() => {
                        this.props.remove(this.props.task._id);
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
        done: (_id) => {
            fetch(`http://localhost:8000/tasks/${_id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: 1 })
            }).then(res => res.json()).then(json => {
                dispatch(TaskActions.done(_id));
            })
        },
        undo: (_id) => {
            fetch(`http://localhost:8000/tasks/${_id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: 0 })
            }).then(res => res.json()).then(json => {
                dispatch(TaskActions.undo(_id));
            })
        },
        remove: (_id) => {
            fetch(`http://localhost:8000/tasks/${_id}`, {
                method: "DELETE"
            }).then(res => res.json()).then(json => {
                dispatch(TaskActions.remove(_id));
            })
        }
    }

}
export default connect(null, mapDispatchToProps)(Item);