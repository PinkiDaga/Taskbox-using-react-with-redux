import React from 'react'
import ClientForm from './ClientForm'
import { connect } from 'react-redux'
import { editClient } from '../../actions/clients'

class ClientEdit extends React.Component{

    handleSubmit = (formData) => {
        this.props.dispatch(editClient(formData.id, formData))
        this.props.history.push(`/clients/${formData.id}`)
    }

    render() {
        return (
            <div>
                <h2> Edit Client </h2>
                <ClientForm handleSubmit={this.handleSubmit} client={this.props.client} /> 
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        client: state.clients.find(client => client.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ClientEdit)