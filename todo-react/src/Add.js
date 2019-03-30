import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import NoteAdd from '@material-ui/icons/NoteAdd';

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
                        this.props.add(subject);
                        this.input.current.value = "";
                    }}>
                        <NoteAdd />
                    </IconButton>
                </Paper>
            </div>
        )
    };
}

export default Add;