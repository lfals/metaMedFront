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



const AcronymsAddModal = () => {
  const [language, setLanguage] = useState('');

  const [isActive, setIsActive] = useState('');

  const formRef = useRef()

  const handleChangeStatus = (event) => {
    setIsActive(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };



  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const { name, description } = e.target.elements
    const data = {
      name: name.value,
      description: description.value,
      language: language.value,
      isActive: isActive


    }


    console.log(data);
    //addToDatabase("maneuver", data)
    //    const response = await getFromDatabase("user")
    //    console.log(response);
  }


  return (
    <Box sx={style}>

      <h1 >Adicionar</h1>




      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <TextField sx={{ mb: 2, mt: 4 }} error={false} id="name" label="Nome" type="text" />
        <FormControl id="language">
          <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
          <Select
            error={false}
            sx={{ mb: 2 }}
            labelId="demo-simple-select-label"
            id="language"
            value={language}
            label="Idioma"
            onChange={handleChangeLanguage}
          >
            <MenuItem value={"pt"}>Portugues</MenuItem>
            <MenuItem value={"en"}>Inglês</MenuItem>

          </Select>
        </FormControl>
        <TextField sx={{ mb: 2 }} error={false} id="description" label="Descrição" type="text" />

        <FormControl id="isActive">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            error={false}
            labelId="demo-simple-select-label"
            id="isActive"
            value={isActive}
            label="Status"
            onChange={handleChangeStatus}
          >
            <MenuItem value={"ativo"}>Ativo</MenuItem>
            <MenuItem value={"desativado"}>Desativado</MenuItem>
          </Select>
        </FormControl>

        <Stack direction="row" sx={{ alignItems: 'flex-end' }} spacing={2}>
          <Button variant="text">Cancelar</Button>
          <Button variant="contained" type="submit">Salvar</Button>
        </Stack>

      </Form>
    </Box>
  )
}

export default AcronymsAddModal