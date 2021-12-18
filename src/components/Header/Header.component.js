import React from "react";
import { Container, ContainerManobras, ContainerDuplo, ContainerCadastradas, ContainerNumeros } from "./style"
const Header = (props) => {

    console.log(props);
    return (
        <Container>
            <ContainerManobras>
                <h1>{props.title}</h1>
            </ContainerManobras>

            <ContainerDuplo>
                <ContainerCadastradas>
                    <h2>{props.title} <br />Cadastradas</h2>
                </ContainerCadastradas>
                <ContainerNumeros>
                    <h1>{props.amount}</h1>
                </ContainerNumeros>
            </ContainerDuplo>
         
        </Container>
    );
}

export default Header;