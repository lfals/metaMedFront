import React, { useEffect, useRef, useState } from 'react'
import { Link, FormControlLabel, TextField } from "@material-ui/core";
import { Container, FormGroup, Box, Checkbox, ButtonGoogle, ButtonLogin } from "./style";
import { FcGoogle } from 'react-icons/fc';
import { Form } from '../modals/style.js'
import Divider from '@mui/material/Divider';
import { addToDatabase } from '../../controller/api/api.controller';



const Register = () => {


    const formRef = useRef()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = await e.target.elements
        const data = {
            name: name.value,
            email: email.value,
            password: password.value,


        }

        addToDatabase("users", data)
        window.location.href = '/'

    }
    return (
        <>

            <Container>

                <Box flexDirection="column">
                    <h1>Cadastro</h1>
                    <p>Preencha os campos para continuar</p>
                    <Form ref={formRef} onSubmit={handleFormSubmit}>

                        <ButtonGoogle fullWidth><FcGoogle />Cadastrar com Google</ButtonGoogle>
                        <Divider >
                            <p>ou</p>
                        </Divider>
                        <TextField fullWidth id="name" label="Nome Completo" variant="outlined" margin="normal" />
                        <TextField fullWidth id="email" label="Email" variant="outlined" type="email" margin="normal" />
                        <TextField fullWidth id="password" label="Senha" variant="outlined" type="password" margin="normal" />
                        <TextField fullWidth id="passwordConfirm" label="Confirmação de senha" type="password" variant="outlined" margin="normal" />
                        <FormGroup fullWidth>
                            <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Concordo com os Termos e Condições" />
                        </FormGroup>
                        <ButtonLogin fullWidth type="submit" >Cadastrar</ButtonLogin>
                        <Divider />
                    </ Form>

                    <Link href="#" underline="always">
                        {'Já possui uma conta?'}
                    </Link>
                </Box>
            </Container>
        </>
    )

}

export default Register