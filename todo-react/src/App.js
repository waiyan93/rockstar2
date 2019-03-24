import React from 'react';
import Header from './Header';
import Todo from './Todo';
import Done from './Done';
import Add from './Add';
import Clear from './Clear';

class App extends React.Component {
    autoId = 5;
    state = {
        tasks: [
            { id: 1, subject: "Milk", status: 0 },
            { id: 2, subject: "Egg", status: 0 },
            { id: 3, subject: "Carrot", status: 1 },
            { id: 4, subject: "Apple", status: 1 },
            { id: 5, subject: "Butter", status: 0 }
        ]
    };

    add = subject => {
        if (subject !== "") {
            let newTask = {
                id: ++this.autoId,
                subject,
                status: 0
            }
            this.setState({
                tasks: [
                    ...this.state.tasks,
                    newTask
                ]
            });
        } else {
            alert("Subject cannot be blank!");
        }
    };

    remove = id => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        })
    };

    done = id => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    task.status = 1;
                }
                return task;
            })
        })
    };

    undo = id => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    task.status = 0;
                }
                return task;
            })
        })
    };

    clear = () => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.status === 0)
        })
    };

    render() {
        return (
            <div>
                <Header
                    count={this.state.tasks.filter(task => task.status === 0).length}
                />
                <Add
                    add={this.add}
                />
                <Todo
                    tasks={this.state.tasks.filter(task => task.status === 0)}
                    remove={this.remove}
                    done={this.done}
                />
                <hr />
                <Done
                    tasks={this.state.tasks.filter(task => task.status === 1)}
                    remove={this.remove} undo={this.undo}
                />
                <Clear clear={this.clear} />
            </div>
        );
    };
}

export default App;