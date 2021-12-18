 import styled from "styled-components";

 import { Box as MuiBox, Link as MuiLink,ListItemText as MuiListItemText } from "@material-ui/core";

export const Box = styled(MuiBox)`
    width: 300px;
    display: flex;
    justify-content: center;
`
 

export const Link = styled(MuiLink)`
        text-decoration: none !important;

`

export const ListItemText = styled(MuiListItemText)`
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;
    
    border-radius: 24px;
    margin-top: 12px !important;

    color: #000;
    text-decoration: none;
    transition: all 0.1s;
    
    &:hover{
        background-color: var(--main-bt-color);
        color: #fff;
        text-decoration: none !important;
    }
`