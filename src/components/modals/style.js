import styled from "styled-components";
import { TextField as MuiTextField, Button as MuiButton, Stack as MuiStack } from '@mui/material';

export const Form = styled.form`

    display: flex;
    flex-direction: column ;

`

export const TextField = styled(MuiTextField) `

    
`

export const Button = styled(MuiButton) `

    text-transform: capitalize !important;

    
`

export const addImageButton = styled(MuiButton)`
    border: 1px solid #000;
    width: 80%;

`
export const Stack = styled(MuiStack) `

    margin-top: 84px;
    justify-content: space-between;


`
