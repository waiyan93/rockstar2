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
class Add extends React.Component {
    input = React.createRef();
    render() {
        return (
            <div>
                <Paper elevation={1} style={styles.container}>
                    <InputBase
                        placeholder="New Task"
                        inputRef={this.input}
                        style={styles.input}
                    />
                    <IconButton onClick={() => {
                        let subject = this.input.current.value;
                        if (subject === "") {
                            alert("Subject cannot be blank!");
                        } else {
                            this.props.addTask(subject);
                            this.input.current.value = "";
                        }
                    }}>
                        <NoteAdd />
                    </IconButton>
                </Paper>
            </div >
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (subject) => {
            fetch("http://localhost:8000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ subject: subject })
            }).then(res => {
                return res.json();
            }).then(json => {
                dispatch(TaskActions.addTask(json))
            });
        }
    }
}
export default connect(null, mapDispatchToProps)(Add);