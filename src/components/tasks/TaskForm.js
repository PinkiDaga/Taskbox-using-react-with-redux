import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux';

class TaskForm extends React.Component{
    constructor(props){
        console.log('taskform',props)
        super(props)
        this.state = {
            title: props.task? props.task.title : '',
            dueDate: props.task ? props.task.dueDate: '',
            isCompleted: props.task ? props.task.isCompleted: false,
            projectid: props.projid 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const taskFormData = {
            taskid: this.props.task ? this.props.task.taskid: uuid(),
            title: this.state.title,
            dueDate: this.state.dueDate,
            isCompleted: this.state.isCompleted,
            projectid: this.props.task ? this.props.projectid: this.props.projid.projid
        }
        this.props.handleSubmit(taskFormData)

        this.setState(()=>({
            title:'',
            dueDate:'',
            isCompleted:false
        }))
    }

    handleTitle = (e) =>{
        const title = e.target.value
        this.setState(()=> ({title: title}))
    }

    handleDate = (e) =>{
        const dueDate = e.target.value
        this.setState(()=> ({dueDate: dueDate}))
    }

    handleCheck = (e) =>{
       // const isCompleted = e.target.checked ? true: false
        const isCompleted = e.target.checked 
        console.log(e.target)
        this.setState(()=> ({ isCompleted}))
    }

    render(){
        return(
            <div>
                <form onSubmit = { this.handleSubmit.bind(this)} >
                    <label>Title
                        <input type='text' value={this.state.title} onChange={this.handleTitle.bind(this)} ></input>
                    </label><br/>
                    <label>Due Date
                        <input type='date' value={this.state.dueDate} onChange={this.handleDate.bind(this)}></input>
                    </label><br/>
                    <label>is Completed
                        <input type='checkbox' defaultChecked = {this.state.isCompleted} onChange={this.handleCheck.bind(this)} ></input>
                    </label><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state)=>{
//     return {
//         projects: state.projects
//     }
// }

// export default connect(mapStateToProps)(TaskForm)
export default TaskForm