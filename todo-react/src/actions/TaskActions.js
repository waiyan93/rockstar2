const TaskActions = {
    set: (tasks) => {
        return {
            type: 'SET',
            tasks: tasks
        }
    },
    addTask: (subject) => {
        return {
            type: 'ADD_TASK',
            subject: subject
        }
    },
    done: (_id) => {
        return {
            type: 'DONE_TASK',
            _id: _id
        }
    },
    undo: (_id) => {
        return {
            type: 'UNDO_TASK',
            _id: _id
        }
    },
    remove: (_id) => {
        return {
            type: 'REMOVE_TASK',
            _id: _id
        }
    },
    clear: () => {
        return {
            type: 'CLEAR',
        }
    }
}
export default TaskActions;