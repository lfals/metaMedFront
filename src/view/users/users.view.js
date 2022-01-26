
import React, { useEffect } from "react";
import { AdminDashboard, Header, Container, DesktopMenu } from "../../components";
import { getUsers } from "../../controller/api/api.controller";

const Users = () => {

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdG9yLm1hY2hhZG9AZmx1bWEuZGV2Iiwic3ViIjoiY2U2MGNjMzUtNGNlYi00MWU0LTllOTItMWUxYTk3ZmVjMzBmIiwicm9sZSI6ImFkbWluIiwiaXNBY3RpdmUiOnRydWUsImlhdCI6MTY0MzE2NTkzNn0.CmEZe8ucUe-qLH-MxmuqC7Euz64dUd6myviueZOjScM"
        const id = "ce60cc35-4ceb-41e4-9e92-1e1a97fec30f"
        const loadUsers = async () => {
                const users = await getUsers(token, id)
                console.log(users);
        }

        useEffect(()=> {
                loadUsers()
        },[])

        return (
                <>
                        <DesktopMenu />
                        <Container>
                                <Header title="Usuários" amount="256" />
                                <AdminDashboard title="Usuários" />
                        </Container>
                </>
        )

}

export default Users; 
