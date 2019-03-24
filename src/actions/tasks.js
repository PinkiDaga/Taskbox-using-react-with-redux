export const addTasks =(task)=>{
    return{
        type: 'ADD_TASK',
        task
    }
}

export const editTask = (id, task) =>{
    return {
        type: 'EDIT_TASK',
        id: id,
        task: task
    }
}

export const removeTask = (id) =>{
    return {
        type: 'REMOVE_TASK',
        id: id
    }
}

export const listTask = () =>{
    return {
        type: 'LIST_TASK'
    }
}