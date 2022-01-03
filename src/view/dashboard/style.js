import React from "react";
import styled from "styled-components";
import { Container as CContainer } from "../../components"

export const Container = styled(CContainer)`
    
    flex-direction: row;
    
`

export const Paper = styled.div `

    background: linear-gradient(252.25deg, #F8A6FF 1.77%, rgba(0, 71, 179, 0) 100%);
    flex-wrap: wrap;
    min-width: 105px;
    width: 100%;
    height: 102px;
    border-radius: 12px;
    margin: 0 12px;
    padding: 19px 32px;
    
`

export const CardTitle = styled.h2 `
    color: #fff;
    font-size: 24px;


`


export const CardContent = styled.h1 `
    color: #fff;
    font-size: 36px;
    


`

