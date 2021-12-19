import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DesktopMenu } from './components';
import GlobalStyle from './globalStyles';
import {Acronyms, Dashboard, Manobras} from "./view"

ReactDOM.render(
  <React.StrictMode>
     <GlobalStyle />
     <DesktopMenu />
   <BrowserRouter> 
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/maneuvers"  element={<Manobras />} />
      <Route path="/acronyms"  element={<Acronyms />} />

    </Routes>
   </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById('root')
);

