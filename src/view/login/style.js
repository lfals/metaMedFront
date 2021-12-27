import styled from "styled-components";

import {Container as CContainer} from '../../components'
import {Box as MuiBox} from '@material-ui/core'


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

    form{
        display: flex;
        flex-direction: column;

        button{
        width: 90%;
        height: 50px;
        background-color: #F3F3F3;
    }
    
    }
    p{
        margin-bottom: 30px;
    }
    button{
        width: 90%;
        height: 50px;
        background-color: #F3F3F3;
    }

   
`