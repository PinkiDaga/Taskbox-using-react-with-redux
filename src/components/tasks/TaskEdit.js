import React from 'react'
import TaskForm from './TaskForm'
import { connect } from 'react-redux'
import { editTask } from '../../actions/tasks'

class TaskEdit extends React.Component{

    handleSubmit = (taskFormData) => {
        console.log('edit',taskFormData)
        this.props.dispatch(editTask(taskFormData.taskid, taskFormData))
        this.props.history.push(`/tasks/${taskFormData.taskid}`)
    }

    render() {
        return (
            <div>
                <h2> Edit Task </h2>
                <TaskForm handleSubmit={this.handleSubmit} task={this.props.task} /> 
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        task: state.tasks.find(task => task.taskid === props.match.params.id)
    }
}

export default connect(mapStateToProps)(TaskEdit)