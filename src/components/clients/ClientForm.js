import React from 'react' 
import uuid from 'uuid'

class ClientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.client ? props.client.name : '' ,
            email: props.email ? props.client.email : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            id: this.props.client ? this.props.client.id : uuid(), 
            name: this.state.name,
            email: this.state.email 
        }
        this.props.handleSubmit(formData)
    }

    handleNameChange = (e) => {
        const name = e.target.value 
        this.setState(() => ({ name }))
    }

    handleEmailChange=(e)=>{
        const email = e.target.value
        this.setState(()=> ({ email }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>
                        name
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label> <br/> 
                    <label>
                        email
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label> <br/> 

                    <input type="submit" />
                </form> 
            </div>
        )
    }
}

export default ClientForm