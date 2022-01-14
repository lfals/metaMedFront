import { Breadcrumbs, Divider, Link, Typography } from "@material-ui/core";
import React from "react";
import { Container, ContainerTitle, QuantityContainer, ContainerCadastradas, ContainerNumeros } from "./style"

const Header = (props) => {

    return (
        <>
        <Container>
            <ContainerTitle>
                <h1>{props.title}</h1>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">
                        MetaMedi
                    </Link>
                    <Typography color="text.primary">{props.title}</Typography>
                </Breadcrumbs>
            </ContainerTitle>

            <QuantityContainer>
                <ContainerCadastradas>
                    <h2>{props.title} <br />Cadastradas</h2>
                </ContainerCadastradas>
                <ContainerNumeros>
                    <h1>{props.amount}</h1>
                </ContainerNumeros>
            </QuantityContainer>
            
        </Container>
           
         </>
    );
}

export default Header;