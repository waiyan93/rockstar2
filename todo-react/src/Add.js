import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import NoteAdd from '@material-ui/icons/NoteAdd';
import { connect } from 'react-redux';
import TaskActions from './actions/TaskActions';

const styles = {
    container: {
        display: "flex"
    },
    input: {
        flexGrow: 1,
        padding: 10
    }
}
const Add = (props) => {
    let input = React.createRef();
    return (
        <div>
            <Paper elevation={1} style={styles.container}>
                <InputBase
                    placeholder="New Task"
                    inputRef={input}
                    style={styles.input}
                />
                <IconButton onClick={() => {
                    let subject = input.current.value;
                    if (subject === "") {
                        alert("Subject cannot be blank!");
                    } else {
                        props.addTask(subject);
                        input.current.value = "";
                    }
                }}>
                    <NoteAdd />
                </IconButton>
            </Paper>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (subject) => { dispatch(TaskActions.addTask(subject)) }
    }
}
export default connect(null, mapDispatchToProps)(Add);