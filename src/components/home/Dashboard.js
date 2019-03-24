import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Dashboard = (props)=>{
    return(
        <div>
            <h2> Total Clients - { props.clients.length }</h2>
            <h2> Total Projects - { props.projects.length }</h2>
            <h2> Total Tasks - { props.tasks.length }</h2>
            <h3> Recent Projects - </h3>
            <ol>
                {props.projects.reverse().map(project => {
                    return <li key={project.projid}> <Link to ={`/projects/${project.projid}`}> {project.projname} </Link> </li>
                })}
            </ol>
            <h3> Recent Tasks - </h3>
            <ol>
                {props.tasks.reverse().map(task=>{
                    return <li key={task.taskid}><Link to = {`/tasks/${task.taskid}`}> { task.title } </Link></li>
                })}
            </ol>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        clients:state.clients,
        projects: state.projects,
        tasks: state.tasks 
    }
}

export default connect(mapStateToProps)(Dashboard)