import React from 'react'
import ProjectForm from './Form'
import { connect } from 'react-redux'
import { editProject } from '../../actions/projects'

class ProjectEdit extends React.Component{

    handleSubmit = (formData) => {
        console.log('edit',formData)
        this.props.dispatch(editProject(formData.projid, formData))
        this.props.history.push(`/projects/${formData.projid}`)
    }

    render() {
        return (
            <div>
                <h2> Edit Project </h2>
                <ProjectForm handleSubmit={this.handleSubmit} project={this.props.project} /> 
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find(project => project.projid === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ProjectEdit)