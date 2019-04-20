const initState = {
    autoId: 5,
    tasks: [
        { id: 1, subject: "Milk", status: 0 },
        { id: 2, subject: "Egg", status: 0 },
        { id: 3, subject: "Carrot", status: 1 },
        { id: 4, subject: "Apple", status: 1 },
        { id: 5, subject: "Butter", status: 0 }
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type === "ADD_TASK") {
        let newTask = {
            id: ++state.autoId,
            subject: action.subject,
            status: 0
        };
        return {
            ...state,
            tasks: [...state.tasks, newTask]
        }
    }
    if (action.type === "DONE_TASK") {
        return {
            ...state,
            tasks: state.tasks.map(task => {
                if (task.id === action.id) {
                    task.status = 1;
                }
                return task;
            })
        }
    }
    if (action.type === "UNDO_TASK") {
        return {
            ...state,
            tasks: state.tasks.map(task => {
                if (task.id === action.id) {
                    task.status = 0;
                }
                return task;
            })
        }
    }
    if (action.type === "REMOVE_TASK") {
        return {
            ...state,
            tasks: state.tasks.filter(task => {
                return task.id !== action.id;
            })
        }
    }
    if (action.type === "CLEAR") {
        return {
            ...state,
            tasks: state.tasks.filter(task => {
                return task.status === 0;
            })
        }
    }
    return state;
}
export default rootReducer;