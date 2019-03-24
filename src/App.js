import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Dashboard from './components/home/Dashboard';
import ProjectList from './components/projects/List'
import ProjectNew from './components/projects/New'
import ProjectShow from './components/projects/Show'
import ProjectEdit from './components/projects/Edit'

import ClientList from './components/clients/ClientList'
import ClientNew from './components/clients/ClientNew'
import ClientShow from './components/clients/ClientShow'
import ClientEdit from './components/clients/ClientEdit'

import TaskList from './components/tasks/TaskList'
import TaskNew from './components/tasks/TaskNew'
import TaskShow from './components/tasks/TaskShow';
import TaskEdit from './components/tasks/TaskEdit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>TaskBox</h2>
          <Link to="/"> Dashboard </Link> 
          <Link to="/projects"> Projects </Link>
          <Link to="/clients"> Clients </Link>

          <Switch>
            <Route path="/" component={ Dashboard } exact={true} />
            <Route path="/projects" component={ProjectList} exact={true} />
            <Route path="/projects/new" component={ProjectNew} exact={true} />
            <Route path="/projects/:id" component={ProjectShow} exact={true} />
            <Route path="/projects/edit/:id" component={ProjectEdit} exact={true} />
            <Route path="/clients" component={ClientList} exact={true} />
            <Route path="/clients/new" component={ClientNew} exact={true} />
            <Route path="/clients/:id" component={ClientShow} exact={true} />
            <Route path="/clients/edit/:id" component={ClientEdit} exact={true} />
            <Route path="/tasks" component={TaskList} exact={true} />
            <Route path="/tasks/new" component={TaskNew} exact={true} />
            <Route path="/tasks/:id" component={TaskShow} exact={true}/>
            <Route path="/tasks/edit/:id" component={TaskEdit} exact={true}/>
          </Switch>
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;