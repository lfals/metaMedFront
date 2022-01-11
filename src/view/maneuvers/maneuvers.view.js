
import React from "react";
import {ManeuversDashboard, ManeuversDashboardAdd, Header, Container, UserDashboard, DesktopMenu} from "../../components";

const Maneuvers = () => {
    return ( 
        <>
                <DesktopMenu />
                <Container>
                        <Header title="Manobras" amount="256"/>
                        {/* <AdminDashboard title="Manobras"/> */}
                        <ManeuversDashboardAdd/>
                </Container>
        </>
        )
   
}

export default Maneuvers; 
