import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore() 

store.subscribe(() => {
    console.log(store.getState())
})

 //store is props
 //each time the state gets changed, App is re-rendered + from App, we calling components, those have connect
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


// import configureStore from './store/configureStore'
// //import { addProject, editProject, removeProject}  from './actions/projects'

// const store = configureStore()

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// // store.dispatch(addProject({ id: 1, name: 'leadware' , description: 'lead managemnt software'}))
// // store.dispatch(addProject({ id: 2, name: 'cts' , description: 'lead IT software'}))

// // store.dispatch(editProject(1, {name: 'leadware v2'}))
// // store.dispatch(removeProject(2))

// ReactDOM.render(<App />, document.getElementById('root'));


