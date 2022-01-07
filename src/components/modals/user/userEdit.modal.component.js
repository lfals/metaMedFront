import { Box } from "@material-ui/core";
import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { Header, Input } from "../../index"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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



const UserEditModal = () => {

    const [status, setStatus] = useState('');

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };


    const [role, setAge] = useState('');



    const handleChange = (event) => {
        setAge(event.target.value);
    };


    function handleSubmit(data) {
        console.log(data)

    }


    return (
        <Box sx={style}>

            <h1 >Editar</h1>




            <Form onSubmit={handleSubmit}>

                <TextField sx={{ mb: 2, mt: 4 }} label="Nome Completo" type="name" />
                <TextField sx={{ mb: 2 }} label="Email" type="email" />
                <TextField sx={{ mb: 2 }} label="Senha" type="password" />
                <TextField sx={{ mb: 2 }} label="Senha" type="password" />


                <FormControl>
                    <InputLabel id="demo-simple-select-label">Tipo de Acesso</InputLabel>
                    <Select
                         sx={{mb:2}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        label="Tipo de Acesso"
                        onChange={handleChange}
                    >
                        <MenuItem value={"administrador"}>Administrador</MenuItem>
                        <MenuItem value={"usuario"}>Usuário</MenuItem>

                    </Select>


                </FormControl>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleChangeStatus}
                    >
                        <MenuItem value={"ativo"}>Ativo</MenuItem>
                        <MenuItem value={"desativado"}>Desativado</MenuItem>

                    </Select>
                </FormControl>

            </Form>
            <Stack direction="row" sx={{ alignItems: 'flex-end' }} spacing={2}>

                <Button variant="text">Cancelar</Button>
                <Button variant="contained">Salvar</Button>

            </Stack>
        </Box>
    )
}

export default UserEditModal