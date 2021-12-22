import react from 'react'
import { AdminDashboard, Container, Header } from '../../components'

const Acronyms = () => {
    return(
        <Container>
            <Header title="Siglas" amount="256"/>
            <AdminDashboard title="Siglas" />
        </Container>
    )
}

export default Acronyms