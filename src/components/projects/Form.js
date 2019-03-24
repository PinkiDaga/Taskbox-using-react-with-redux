import React from 'react' 
import uuid from 'uuid'
import { connect } from 'react-redux'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projname: props.project ? props.project.projname : '',
            projclient: props.project ? props.project.projclient : '' 
        }
    }

  

    handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            projid: this.props.project ? this.props.project.projid : uuid(), 
            projname: this.state.projname,
            projclient: this.state.projclient 
        }
        this.props.handleSubmit(formData)
    }

    handleProjNameChange = (e) => {
        const projname = e.target.value 
        this.setState(() => ({ projname }))
    }

    handleClientChange = (e) =>{
        e.persist()
        this.setState(()=>({
            projclient: e.target.value
        }))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>
                        name
                        <input type="text" value={this.state.projname} onChange={this.handleProjNameChange} />
                    </label> <br/> 
                    <label>
                        Client
                        <select name='client' onChange= {this.handleClientChange.bind(this)} >
                        {this.props.clients.map(function(client){
                            return (
                                <option key = {client.id} value = {client.name} > {client.name} </option>
                            )
                        })}
                        </select>
                    </label>

                    <input type="submit" />
                </form> 
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ProjectForm)