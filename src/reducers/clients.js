const clientsInitialState = [{id:'1',name:'a',email:'a@a'} ,{id:'2',name:'b',email:'b@a'}]
//ideally aPI call

const clientsReducer = (state = clientsInitialState,action)=> {
    switch(action.type){
        case 'ADD_CLIENT':
            return [...state, action.client] //array
        case 'EDIT_CLIENT':
            return state.map(client => {
                if (client.id === action.id) {
                    return {...client, ...action.client} //object
                }else{
                    return client
                }
            })
        case 'REMOVE_CLIENT':
            return state.filter(client => client.id !== action.id)
        default:
            return [...state]
    }
}

export default clientsReducer