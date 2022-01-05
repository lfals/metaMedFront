
import React from "react";
import {AdminDashboard, UserDashboardAdd, Header, Container, DesktopMenu} from "../../components";

const Users = () => {
    return ( 
        <>
                <DesktopMenu />
                <Container>
                        <Header title="Usuários" amount="256"/>
                        <UserDashboardAdd title="Usuários"/>
                </Container>
        </>
        )
   
}

export default Users; 
