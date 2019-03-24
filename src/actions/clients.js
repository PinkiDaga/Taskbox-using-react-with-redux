
export const addClient = (client)=>{
    return {
        type: 'ADD_CLIENT',
        client
    }
}

export const editClient = (id, client)=>{
    return {
        type: 'EDIT_CLIENT',
        id: id,
        client: client //ES6 object concise properties
    }
}

export const removeClient = (id) => {
    return {
        type: 'REMOVE_CLIENT',
        id
    }
}