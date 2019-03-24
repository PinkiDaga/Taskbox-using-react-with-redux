import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeTask} from '../../actions/tasks'
import { editTask } from '../../actions/tasks'

const TaskList = (props) => {
    if (props.tasks.length > 0){
        return (
            <div>
                <h2>Listing Tasks - { props.tasks.length } </h2>
                <ul>
                    { props.tasks.map(task => {
                        return (
                            <li key={task.taskid}> <Link to={`/tasks/${task.taskid}`}>{task.title} </Link>
                            <label>  isCompleted <input type='checkbox' defaultChecked = {task.isCompleted} onChange={(e)=>{
                                const isCompleted = e.target.checked
                                console.log('c',isCompleted,task.taskid)
                                const taskFormData = {
                                    isCompleted: isCompleted
                                }
                                props.dispatch(editTask(task.taskid, taskFormData))
                            }} ></input></label>
                            <input type='button' value='Remove' onClick={()=>{
                                const confirmDelete = window.confirm("Are you sure?")
                                if (confirmDelete) {
                                    props.dispatch(removeTask(task.taskid))
            
                                }
                            }}/>
                            </li>
                        )
                    })}
                </ul>
                {/* <Link to="/tasks/new" > Add Task </Link> */}
            </div>
        )
    }else{
        return (
            <div>
                <h2>No tasks </h2>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks 
    }
}

export default connect(mapStateToProps)(TaskList)