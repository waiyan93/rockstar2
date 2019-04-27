const rootReducer = (state = [], action) => {
    if (action.type === "SET") {
        return action.tasks;
    }
    if (action.type === "ADD_TASK") {
        return [action.subject, ...state];
    }
    if (action.type === "DONE_TASK") {
        return state.map(task => {
            if (task._id === action._id) {
                task.status = 1;
            }
            return task;
        })
    }
    if (action.type === "UNDO_TASK") {
        return state.map(task => {
            if (task._id === action._id) {
                task.status = 0;
            }
            return task;
        })
    }
    if (action.type === "REMOVE_TASK") {
        return state.filter(task => task._id !== action._id);
    }
    if (action.type === "CLEAR") {
        return state.filter(task => {
            return task.status === 0;
        })
    }
    return state;
}
export default rootReducer;