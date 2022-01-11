import { Box } from "@material-ui/core";
import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { Header } from "../../index"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

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

const Input = styled('input')({
  display: 'none',
});


const ManeuversEditModal = () => {


  const [status, setStatus] = useState('');

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };


  function handleSubmit(data) {
    console.log(data)

  }


  return (
    <Box sx={style}>

      <h1 >Editar</h1>




      <Form onSubmit={handleSubmit}>

        <Stack direction="column" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Adicionar Imagem
            </Button>
          </label>

        </Stack>

        <TextField sx={{ mb: 2, mt: 4 }} label="Nome" type="text" />
        <TextField sx={{ mb: 2 }} label="Descrição" type="text" />
        <TextField sx={{ mb: 2 }} label="Aplicabilidade" type="text" />
        <TextField sx={{ mb: 2 }} label="Se positivo" type="text" />
        <TextField sx={{ mb: 2 }} label="Se negativo" type="text" />
        <TextField sx={{ mb: 2 }} label="Quem foi que deu o nome a esta manobra?" type="text" />


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

        <Button variant="text">Excluir</Button>
        <Button variant="contained">Salvar</Button>

      </Stack>
    </Box>
  )
}

export default ManeuversEditModal