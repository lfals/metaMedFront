import styled from "styled-components";

import { Container as CContainer } from '../../components'
import { Box as MuiBox , Button as MuiButton, TextField as MuiTextField, FormGroup as MuiFormGroup, Checkbox as MuiCheckbox} from '@material-ui/core'

export const Container = styled(CContainer)`
    
`



export const Box = styled(MuiBox)`

    padding: 32px;
    margin: auto;
    width: 500px;
    max-height: 90vh;
    background-color: white;
    
    justify-content: center;
    border-radius: 12px;
    text-align: center;
   
  
    
    
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
    justify-content: space-between;
    flex-direction: row !important;
    width: 100%;

`
export const Checkbox = styled(MuiCheckbox) `
 


`

export const TextField = styled(MuiTextField) `
`



