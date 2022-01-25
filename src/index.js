import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Navigate, Switch, Routes } from "react-router-dom";
import { DesktopMenu } from './components';
import { Redirect } from "react-router-dom";
import GlobalStyle from './globalStyles';
import { isAuthenticated } from './helper/auth';
import { Acronyms, Dashboard, Login, Maneuvers, Users } from "./view"
import RegisterUser from './view/register/register.view';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


ReactDOM.render(



  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/maneuvers" element={<Maneuvers />} />
        <Route path="/acronyms" element={<Acronyms />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<RegisterUser />} />


      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

