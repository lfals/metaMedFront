import styled from "styled-components";

import { Container as CContainer } from '../../components'
import { Box as MuiBox , Button as MuiButton, TextField as MuiTextField, FormGroup as MuiFormGroup} from '@material-ui/core'

export const Container = styled(CContainer)`

`



export const Box = styled(MuiBox)`

    padding: 94px 0 100px 0;
    margin: auto;
    width: 500px;
    max-height: 90vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    
    
    button{
        height: 50px;
        margin-bottom: 24px;
        margin-top: 24px;

    }

   
`

export const ButtonLogin = styled(MuiButton) `
        background: #357CE8 !important;
        color: #FFFFFF !important;
        border-radius: 6px;

`

export const ButtonGoogle = styled(MuiButton) `
    
       border-radius: 12px;
       background: #F3F3F3 !important;

       svg {
        font-size: 24px;
        margin-right: 6px;

       }

`

export const FormGroup = styled(MuiFormGroup) `
   
    display: flex;
    align-items: center ;
    flex-direction: row !important;


`