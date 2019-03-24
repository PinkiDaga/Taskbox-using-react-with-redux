import React from 'react' 
import { connect } from 'react-redux'

import { addClient } from '../../actions/clients'
import ClientForm from './ClientForm'


class ClientNew extends React.Component {
    
    handleSubmit = (formData) => {
        this.props.dispatch(addClient(formData))
        this.props.history.push('/clients')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2> Add Client </h2>

                <ClientForm handleSubmit={this.handleSubmit} />

            </div> 
        )
    }
}

export default connect()(ClientNew)