import React from 'react' 
import { connect } from 'react-redux'

import { addProject } from '../../actions/projects'
import ProjectForm from './Form'


class ProjectNew extends React.Component {
    
    handleSubmit = (formData) => {
        this.props.dispatch(addProject(formData))
        this.props.history.push('/projects')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2> Add Project </h2>

                <ProjectForm handleSubmit={this.handleSubmit} />

            </div> 
        )
    }
}

export default connect()(ProjectNew)