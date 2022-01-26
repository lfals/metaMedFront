
import {  Redirect, Route, Switch } from "react-router-dom"
import { Register } from "./components";
import { isAuthenticated } from "./helper/auth"
import { Acronyms, Dashboard, Login, Maneuvers, Users } from "./view"

const auth = isAuthenticated()
console.log(auth);
const Pages = () => {

    if(!auth){
        return(
            <Switch>
                <Route exact path="/" >
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        )
    }
    return(
        <Switch>
        <Route exact path="/" >
            <Dashboard />
        </Route>
        <Route path="/maneuvers">
            <Maneuvers />
        </Route>
        <Route path="/acronyms">
            <Acronyms />
        </Route>
        <Route path="/users">
            <Users />
        </Route>
        <Route path="/functions">
           <h1>Fuc</h1>
        </Route>
        <Route path="/*">
            <Redirect to="/" />
        </Route>

    </Switch>
    )
}
export default Pages
