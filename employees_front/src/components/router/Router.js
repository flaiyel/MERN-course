import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from '../auth/Privateroute'
import Login from '../login/Login'
import EmployeesFind from '../employees/Employees.find'

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={["/","/login"]} component={ Login }/>
                <PrivateRoute exact path="/employees" component={ EmployeesFind }/>
                <Route path="*" component={ () => <h1 style={{ marginTop: 100 }}>404 <br/> Página no encontrada </h1> }/>
            </Switch>
        </Router>
    )
}

export default Routers
