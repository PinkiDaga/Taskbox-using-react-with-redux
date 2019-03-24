const projectsInitialState = [{projid: 1,projname:'axa',projclient:'a'}]
//ideally aPI call

const projectsReducer = (state = projectsInitialState,action)=> {
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state, action.project] //array
        case 'EDIT_PROJECT':
            return state.map(project => {
                if (project.projid === action.id) {
                    return {...project, ...action.project} //object
                }else{
                    return project
                }
            })
        case 'REMOVE_PROJECT':
            return state.filter(project => project.projid !== action.id)
        default:
            return [...state]
    }
}

export default projectsReducer