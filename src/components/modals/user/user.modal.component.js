import { Box } from "@material-ui/core";
import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { Input } from "../../index"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Form, TextField } from './style.js'






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
  const [role, setAge] = useState('');

 
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  

  function handleSubmit(data) {
    console.log(data)

  }


  return (
    <Box sx={style}>
      <Form onSubmit={handleSubmit}>

        <TextField sx={{mb:2}} label="Nome Completo" />
        <TextField sx={{mb:2}} label="Email"  />
        <TextField sx={{mb:2}} label="Senha"  />

        <FormControl>
          <InputLabel id="demo-simple-select-label">role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value={"administrador"}>Administrador</MenuItem>
            <MenuItem value={"usuario"}>Usuário</MenuItem>
          
          </Select>
        </FormControl>

      </Form>

    </Box>
  )
}

export default UserAddModal