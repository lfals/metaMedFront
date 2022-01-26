import React from "react";
import UserViewContent from "./user.viewContent.component";



const UserAcronymsDashboard = () => {

    const data = [
        {
            name: "sigla 1",
            description: "descrição da 1"
        },
        {
            name: "sigla 2",
            description: "descrição da 2"
        },
        {
            name: "sigla 3",
            description: "descrição da 3"
        },
        {
            name: "sigla 4",
            description: "descrição da 4"
        }
    ]


    return (
        <>
            <UserViewContent data={data} title="Siglas" />
        </>
    )

}

export default UserAcronymsDashboard