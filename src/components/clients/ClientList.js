
import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ClientList = (props) => {
    return (
        <div>
            <h2>Listing Clients - { props.clients.length } </h2>
            <ul>
                { props.clients.map(client => {
                    return <li key={client.id}> <Link to={`/clients/${client.id}`}>{client.name} </Link>  </li>
                })}
            </ul>

            <Link to="/clients/new" > Add Client </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients 
    }
}

export default connect(mapStateToProps)(ClientList)