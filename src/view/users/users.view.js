
import React from "react";
import {AdminDashboard, Header, Container} from "../../components";

const Users = () => {
    return ( 
        <>
                <Container>
                        <Header title="Usuários" amount="256"/>
                        <AdminDashboard title="Usuários"/>
                </Container>
        </>
        )
   
}

export default Users; 
