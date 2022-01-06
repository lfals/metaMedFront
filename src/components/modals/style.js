import styled from "styled-components";
import { Form  as WebForm} from "@unform/web";
import { TextField as MuiTextField, Button as MuiButton, Stack as MuiStack } from '@mui/material';

export const Form = styled(WebForm)`

    display: flex;
    flex-direction: column ;

`

export const TextField = styled(MuiTextField) `

    
`

export const Button = styled(MuiButton) `

    text-transform: capitalize !important;

    
`
export const Stack = styled(MuiStack) `

    margin-top: 84px;
    justify-content: space-between


`
