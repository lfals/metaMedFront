
import React from "react";
import {AdminDashboard, UserDashboardAdd, UserDashboard, Header, Container, DesktopMenu} from "../../components";

const Users = () => {
    return ( 
        <>
                <DesktopMenu />
                <Container>
                        <Header title="Usuários" amount="256"/>
                        <AdminDashboard title="Usuários"/>
                </Container>
        </>
        )
   
}

export default Users; 
