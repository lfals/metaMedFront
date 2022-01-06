
import React from "react";
import {ManeuversDashboard, Header, Container, UserDashboard, DesktopMenu} from "../../components";

const Maneuvers = () => {
    return ( 
        <>
                <DesktopMenu />
                <Container>
                        <Header title="Manobras" amount="256"/>
                        {/* <AdminDashboard title="Manobras"/> */}
                        <ManeuversDashboard/>
                </Container>
        </>
        )
   
}

export default Maneuvers; 
