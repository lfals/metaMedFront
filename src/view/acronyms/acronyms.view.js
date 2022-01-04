import react from 'react'
import { AdminDashboard, Container, DesktopMenu, Header, UserDashboard } from '../../components'

const Acronyms = () => {
    return(
        <>
        <DesktopMenu />
        <Container>
            <Header title="Siglas" amount="256"/>
            <UserDashboard />
            {/* <AdminDashboard title="Siglas" /> */}
        </Container>
        </>
       
    )
}

export default Acronyms