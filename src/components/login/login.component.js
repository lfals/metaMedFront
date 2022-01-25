import React, { useEffect, useRef, useState } from 'react'
import { Link, FormControlLabel, TextField } from "@material-ui/core";
import { Container, FormGroup, Box, Checkbox, ButtonGoogle, ButtonLogin } from "./style";
import { FcGoogle } from 'react-icons/fc';
import Divider from '@mui/material/Divider';
import { Form } from '../modals/style.js'
import { getFromDatabase, postToDatabase } from '../../controller/api/api.controller';



const Login = () => {



    const formRef = useRef()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = await e.target.elements
        const data = {
            email: email.value,
            password: password.value,


        }

        console.log(data);
        const token = await postToDatabase("auth/login", data).then(user => {
            return user.data.access_token
        })

        localStorage.setItem("userId", token);

    }
    return (
        <>

            <Container>

                <Box flexDirection="column">
                    <h1>Bem vindo de volta!</h1>
                    <p>Faça login para continuar</p>
                    <Form ref={formRef} onSubmit={handleFormSubmit}>
                        <ButtonGoogle fullWidth><FcGoogle />Login com Google</ButtonGoogle>
                        <Divider >
                            <p>ou</p>
                        </Divider>
                        <TextField fullWidth margin="normal" error={false} variant="outlined" id="email" label="Email" type="email" />
                        <TextField fullWidth margin="normal" error={false} variant="outlined" id="password" label="Senha" type="password" />

                        <FormGroup fullWidth>
                            <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Lembrar" />
                            <Link href="#" underline="always">
                                {'Esqueceu a senha?'}
                            </Link>
                        </FormGroup>
                        <ButtonLogin fullWidth type="submit">Login</ButtonLogin>
                    </Form>
                </Box>
            </Container>
        </>
    )

}

export default Login