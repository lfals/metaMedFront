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



const AcronymsAddModal = () => {
  const [language, setLanguage] = useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const [status, setStatus] = useState('');

  const handleChangeStatus = (event) => {
        setStatus(event.target.value);
  };
  

  function handleSubmit(data) {
    console.log(data)

  }


  return (
    <Box sx={style}>
      
      <h1 >Adicionar</h1>
      
        

      
      <Form  onSubmit={handleSubmit}>

        <TextField sx={{mb:2, mt:4}} label="Nome" type="text" />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
          <Select 
            sx={{mb:2}} 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Idioma"
            onChange={handleChange}
          >
            <MenuItem value={"pt"}>Portugues</MenuItem>
            <MenuItem value={"en"}>Inglês</MenuItem>
          
          </Select>
        </FormControl>
        <TextField sx={{mb:2}}  label="Descrição"  type="text"  />

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

export default AcronymsAddModal