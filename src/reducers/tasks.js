const tasksInitialState = []

const tasksReducer = (state = tasksInitialState, action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return [...state, action.task]
        case 'EDIT_TASK':
            return state.map(task =>{
                if (task.taskid == action.id){
                    return {...task,...action.task}
                }else{
                    return task
                }
            })
        case 'REMOVE_TASK':
            return state.filter(task=>task.taskid !== action.id)
        case 'LIST_TASK':
            return [state.task]
        default:
            return [...state]
    }
}

export default tasksReducer