
import React from "react";
import {AdminDashboard, Header, Container, UserDashboard, DesktopMenu} from "../../components";

const Maneuvers = () => {
    return ( 
        <>
                <DesktopMenu />
                <Container>
                        <Header title="Manobras" amount="256"/>
                        {/* <AdminDashboard title="Manobras"/> */}
                        <UserDashboard/>
                </Container>
        </>
        )
   
}

export default Maneuvers; 
