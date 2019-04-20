const TaskActions = {
    addTask: (subject) => {
        return {
            type: 'ADD_TASK',
            subject: subject
        }
    },
    done: (id) => {
        return {
            type: 'DONE_TASK',
            id: id
        }
    },
    undo: (id) => {
        return {
            type: 'UNDO_TASK',
            id: id
        }
    },
    remove: (id) => {
        return {
            type: 'REMOVE_TASK',
            id: id
        }
    },
    clear: () => {
        return {
            type: 'CLEAR',
        }
    }
}
export default TaskActions;