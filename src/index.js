import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Dashboard} from "./view"

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter> 
    <Routes>
      <Route path="/" exact element={<Dashboard />} />

    </Routes>
   </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById('root')
);

