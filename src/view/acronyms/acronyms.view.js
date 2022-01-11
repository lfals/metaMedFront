import react from 'react'
import { AcronymsDashboard,AcronymsDashboardAdd, AdminDashboard, Container, DesktopMenu, Header, UserDashboard } from '../../components'

const Acronyms = () => {
    return(
        <>
        <DesktopMenu />
        <Container>
            <Header title="Siglas" amount="256"/>
            <AcronymsDashboardAdd />
            {/* <AdminDashboard title="Siglas" /> */}
        </Container>
        </>
       
    )
}

export default Acronyms