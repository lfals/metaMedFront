import React from 'react';
import Pages from "./routes";
import GlobalStyle from './globalStyles';
import { BrowserRouter } from 'react-router-dom';


export default function App() {
   return (
       <>
       <GlobalStyle />
       <BrowserRouter>
        <Pages/>
       </BrowserRouter>,
       </>
   );
}