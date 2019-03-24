//npm install --save react-redux
//npm install --save react-router-dom

import React from 'react' 
// npm install --save react-router-dom
// npm install --save react-redux
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ProjectList = (props) => {
    return (
        <div>
            <h2>Listing Projects - { props.projects.length } </h2>
            <ul>
                { props.projects.map(project => {
                    return <li key={project.projid}> <Link to={`/projects/${project.projid}`}>{project.projname} </Link>  </li>
                })}
            </ul>

            <Link to="/projects/new" > Add Project </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects 
    }
}

export default connect(mapStateToProps)(ProjectList)