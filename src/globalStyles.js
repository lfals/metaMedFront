import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root{
  --main-color: #357CE8;
}
  #root{
  display: flex;

}
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1,h2,h3,h4,h5,h6,a,p{
    margin: 0;
   

  }
`;
 
export default GlobalStyle;