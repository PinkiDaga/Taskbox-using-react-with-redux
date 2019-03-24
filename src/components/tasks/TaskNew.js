import React from 'react' 
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'

import { addTasks } from '../../actions/tasks'
import { listTask} from '../../actions/tasks'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

//history does not work with nested components - so use withRouter
class TaskNew extends React.Component {
    
    handleSubmit = (taskFormData) => {
        console.log('tasknew',this.props)
        console.log('tskformdata',taskFormData)
        this.props.dispatch(addTasks(taskFormData))
        //this.props.dispatch(listTask())
        // this.props.history.push('/tasks')
        
    }

    render() {
        console.log('hi',this.props)
        return (
            <div>
                <h2> Add Tasks </h2>

                <TaskForm handleSubmit={this.handleSubmit} projid={this.props}/>
                {/* <TaskList /> */}
            </div> 
        )
    }
}

export default withRouter(connect()(TaskNew))