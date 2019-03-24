
export const addProject = (project)=>{
    return {
        type: 'ADD_PROJECT',
        project
    }
}

export const editProject = (id, project)=>{
    return {
        type: 'EDIT_PROJECT',
        id: id,
        project: project //ES6 object concise properties
    }
}

export const removeProject = (id) => {
    console.log('remove',id)
    return {
        type: 'REMOVE_PROJECT',
        id
    }
}