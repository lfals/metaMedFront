import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DesktopMenu } from './components';
import GlobalStyle from './globalStyles';
import {Acronyms, Dashboard, Login, Maneuvers, Users} from "./view"

ReactDOM.render(
  <React.StrictMode>
     <GlobalStyle />
   <BrowserRouter> 
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/maneuvers"  element={<Maneuvers />} />
      <Route path="/acronyms"  element={<Acronyms />} />
      <Route path="/users"  element={<Users />} />
      <Route path="/login"  element={<Login />} />

    </Routes>
   </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById('root')
);

