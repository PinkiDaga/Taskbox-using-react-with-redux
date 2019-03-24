import { createStore, combineReducers } from 'redux'
import projectsReducer from '../reducers/projects'
import clientsReducer from '../reducers/clients';
import tasksReducer from '../reducers/tasks'

//we can directly use store

const configureStore = () =>{
    const store = createStore(combineReducers({
        projects: projectsReducer,
        clients: clientsReducer,
        tasks: tasksReducer
    }))

    return store
}

export default configureStore