import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { removeTask } from '../../actions/tasks'
import TaskForm from '../tasks/TaskForm';
import TaskNew from '../tasks/TaskNew'
import TaskList from '../tasks/TaskList';


const TaskShow = (props) => {

    console.log('taskShow',props)

    if (props.task != undefined){
        
        let status = ''
        console.log('status',props.task.isCompleted)

        if (props.task.isCompleted == true){
            status = 'Done'
            console.log('done')
        }
        else if (props.task.isCompleted == false){
            status = 'InComplete'
            console.log('not')
        }
        
        return (
       
            <div>
                <h2> { props.task.title} - { props.task.dueDate} - { status }</h2> 
               
                <Link to = {`/tasks/edit/${props.task.taskid}`}> edit </Link>
                <button onClick={() => {
                    const confirmDelete = window.confirm("Are you sure?")
                    if (confirmDelete) {
                        props.dispatch(removeTask(props.task.taskid))
                       // props.history.push('/projects')
                    }
                }}> delete </button> 
    
                <Link to="/"> back </Link>
            </div>
        )
    }else{
        return(
            <div>
                <h2> Sorry this page does not exists</h2>
            </div>
        )
    }

}   

const mapStateToProps = (state, props) => {
    return {
        task: state.tasks.find(task => task.taskid === props.match.params.id )
    }
}

export default connect(mapStateToProps)(TaskShow)