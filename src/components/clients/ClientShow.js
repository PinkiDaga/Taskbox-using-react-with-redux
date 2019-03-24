import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { removeClient } from '../../actions/clients'

const ClientShow = (props) => {
    let matchProjects = props.projects.filter(project=> project.projclient == props.client.name)
    console.log('match',matchProjects)
    return (
        <div>
            <table border = '1'>
                <tr>
                    <th> name </th> <th> email </th>
                </tr>
                <tr>
                    <td> { props.client.name} </td> <td> { props.client.email} </td>
                </tr>
            </table>
            {/* <h2> { props.client.name} - { props.client.email} </h2>  */}
            <br/>
            <h2> Projects </h2>
            <ul>
                { matchProjects.map(matchproject=> {
                   return <li key={matchproject.projid}><Link to = {`/projects/${matchproject.projid}`}> {matchproject.projname} </Link> </li>
                })}
            </ul>
         
            <br/>
            <Link to={`/clients/edit/${props.client.id}`}> edit </Link>
            <button onClick={() => {
                const confirmDelete = window.confirm("Are you sure?")
                if (confirmDelete) {
                    props.dispatch(removeClient(props.client.id))
                    props.history.push('/clients')
                }
            }}> delete </button> 
            
           
            <Link to="/clients"> back </Link>
        </div>
    )
}   

const mapStateToProps = (state, props) => {
    console.log('showProps',props)
    return {
        client: state.clients.find(client => client.id === props.match.params.id ),
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ClientShow)