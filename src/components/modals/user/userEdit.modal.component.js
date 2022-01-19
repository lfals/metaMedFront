import { Box } from "@material-ui/core";
import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { Header, Input } from "../../index"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addToDatabase, getFromDatabase } from "../../../controller/api/api.controller.js";
import { Form, TextField, Button, Stack } from '../style.js'




const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 12,
    boxShadow: 24,
    p: 4,
};



const UserAddModal = () => {

    const [isActive, setIsActive] = useState('');

    const [role, setRole] = useState('');

    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };

    const handleChangeStatus = (event) => {
        setIsActive(event.target.value);
    };

    const formRef = useRef()


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password, repassword } = e.target.elements
        const data = {
            name: name.value,
            email: email.value,
            password: password.value,
            repassword: repassword.value,
            role: role,
            isActive: isActive


        }


        console.log(data);
        //addToDatabase("user", data)
        //    const response = await getFromDatabase("user")
        //    console.log(response);
    }

    return (
        <Box sx={style}>

            <h1 >Editar</h1>




            <Form ref={formRef} onSubmit={handleFormSubmit}>

                <TextField sx={{ mb: 2, mt: 4 }} error={false} id="name" label="Nome Completo" type="name" />
                <TextField sx={{ mb: 2 }} error={false} id="email" label="Email" type="email" />
                <TextField sx={{ mb: 2 }} error={false} id="password" label="Senha" type="password" />
                <TextField sx={{ mb: 2 }} error={false} id="repassword" label="Senha" type="password" />

                <FormControl>
                    <InputLabel id="demo-simple-select-label" error={false} >Tipo de Acesso</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="role"
                        value={role}
                        label="Tipo de Acesso"
                        onChange={handleChangeRole}
                    >
                        <MenuItem name="administrator" id="administrator" value={"administrator"}>Administrador</MenuItem>
                        <MenuItem name="user" id="user" value={"user"}>Usuário</MenuItem>
                    </Select>
                </FormControl>


                <FormControl sx={{ mt: 2 }}>
                    <InputLabel id="demo-simple-select-label" error={false} >Status</InputLabel>
                    <Select

                        labelId="demo-simple-select-label"
                        id="isActive"
                        value={isActive}
                        label="Status"
                        onChange={handleChangeStatus}
                    >
                        <MenuItem name="active" id="active" value={true}>Ativo</MenuItem>
                        <MenuItem name="inactive" id="inactive" value={false}>Desativado</MenuItem>

                    </Select>
                </FormControl>



                <Stack direction="row" sx={{ alignItems: 'flex-end' }} spacing={2}>

                    <Button variant="text">Cancelar</Button>
                    <Button type="submit" variant="contained">Salvar</Button>

                </Stack>
            </Form>
        </Box>
    )
}

export default UserAddModal