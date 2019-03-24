import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { removeProject } from '../../actions/projects'
import TaskForm from '../tasks/TaskForm';
import TaskNew from '../tasks/TaskNew'
import TaskList from '../tasks/TaskList';


const ProjectShow = (props) => {

    console.log('projShow',props)
    if (props.project != undefined){
        return (
       
            <div>
                <h2> { props.project.projname} - { props.project.projclient} </h2> 
                {/* <h3> Listing Tasks </h3><br/> */}
               <TaskList/><br/>
               <TaskNew projid={props.project.projid}/> <br/>
                <Link to = {`/projects/edit/${props.project.projid}`}> edit </Link>
                <button onClick={() => {
                    const confirmDelete = window.confirm("Are you sure?")
                    if (confirmDelete) {
                        props.dispatch(removeProject(props.project.projid))
                        props.history.push('/projects')
                    }
                }}> delete </button> 
    
                <Link to="/projects"> back </Link>
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
        project: state.projects.find(project => project.projid === props.match.params.id )
    }
}

export default connect(mapStateToProps)(ProjectShow)