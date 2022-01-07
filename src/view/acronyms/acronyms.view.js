import react from 'react'
import { AcronymsDashboard, AdminDashboard, Container, DesktopMenu, Header, UserDashboard } from '../../components'

const Acronyms = () => {
    return(
        <>
        <DesktopMenu />
        <Container>
            <Header title="Siglas" amount="256"/>
            <AcronymsDashboard />
            {/* <AdminDashboard title="Siglas" /> */}
        </Container>
        </>
       
    )
}

export default Acronyms