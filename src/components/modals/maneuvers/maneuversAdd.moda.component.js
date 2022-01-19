import { Box } from "@material-ui/core";
import React, { useEffect, useRef, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { Form, TextField, Button, Stack } from '../style.js'
import { addToDatabase, getFromDatabase } from "../../../controller/api/api.controller.js";

const styleInput = {
    border: "1px dashed rgba(0, 0, 0, 0.87)",
    width: "100%",
    height: 100,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

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



const ManeuversAddModal = () => {

    const [isActive, setIsActive] = useState('');
    const [image, setImage] = useState('');


    const formRef = useRef()

    const handleChangeStatus = (event) => {
        setIsActive(event.target.value);
    };

    const handleImageChange = (e) => {
        console.log(e);
        let img = e.target.files[0];
        let blobUrl = URL.createObjectURL(img)
        console.log(blobUrl);
        setImage(blobUrl)
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const { name, description, aplicability, ifPositive, ifNegative, who } = e.target.elements
        const data = {
            name: name.value,
            description: description.value,
            applicability: aplicability.value,
            ifPositive: ifPositive.value,
            ifNegative: ifNegative.value,
            whoCreated: who.value,
            image: image,
            isActive: isActive


        }


        console.log(data);
        //  addToDatabase("maneuver", data)
        //    const response = await getFromDatabase("user")
        //    console.log(response);
    }

    return (
        <Box sx={style}>

            <h1 >Adicionar</h1>



            <Form ref={formRef} onSubmit={handleFormSubmit}>

                <Stack direction="column" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file" style={styleInput}>
                        <TextField accept="image/png,image/gif,image/jpeg" id="image" multiple type="file" name="file" onChange={handleImageChange} />
                        <addImageButton variant="contained" component="span">
                            Adicionar Imagem
                        </addImageButton>
                    </label>

                </Stack>
                <TextField sx={{ mb: 2, mt: 4 }} error={true} id="name" label="Nome" v />
                <TextField sx={{ mb: 2 }} error={true} id="description" label="Descrição" type="text" />
                <TextField sx={{ mb: 2 }} error={true} id="aplicability" label="Aplicabilidade" type="text" />
                <TextField sx={{ mb: 2 }} error={true} id="ifPositive" label="Se positivo" type="text" />
                <TextField sx={{ mb: 2 }} error={true} id="ifNegative" label="Se negativo" type="text" />
                <TextField sx={{ mb: 2 }} error={true} id="who" label="Quem foi que deu o nome a esta manobra?" type="text" />


                <FormControl id="isActive">
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
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

                    <Button variant="text" >Excluir</Button>
                    <Button variant="contained" type="submit">Salvar</Button>
                </Stack>
            </Form>

        </Box>
    )
}

export default ManeuversAddModal