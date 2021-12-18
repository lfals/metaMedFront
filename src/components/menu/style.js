 import styled from "styled-components";

 import { Box as MuiBox, Link as MuiLink,ListItemText as MuiListItemText, Avatar as MuiAvatar, Menu as MuiMenu } from "@material-ui/core";

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
        background-color: var(--main-color);
        color: #fff;
        text-decoration: none !important;
    }
`

export const MenuContainer = styled(MuiBox)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 95vh;
`

export const ProfileHolder = styled(MuiBox)`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 150px;
    height: 50px;
    border-radius: 24px;
    margin: 0 auto;
    padding: 0 20px;

    background-color: var(--main-color);
`

export const ProfileTextHolder = styled(MuiBox)`
    display: flex;
    h1, p{
        color: white;
        font-size: 16px;
    }
    svg{
        color: white;
        width: 50px;
        font-size: 20px;
    }
    
`

export const Avatar = styled(MuiAvatar)`
    margin-right: 12px;
`

export const Menu = styled(MuiMenu)`
`

export const PopupMenuText = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
    width: 200px;

    h1{
        font-size: 20px;
    }
    p{
        font-size:16px
    }
`

export const CompanyLogo = styled.h1`
    margin: 25px auto;
`