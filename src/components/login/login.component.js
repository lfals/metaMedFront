import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useHistory, use  } from 'react-router-dom'
import { Link, FormControlLabel, TextField } from "@material-ui/core";
import { Container, FormGroup, Box, Checkbox, ButtonGoogle, ButtonLogin } from "./style";
import { FcGoogle } from 'react-icons/fc';
import Divider from '@mui/material/Divider';
import { Form } from '../modals/style.js'
import { getFromDatabase, postToDatabase } from '../../controller/api/api.controller';
import { login, sessionLogin } from '../../helper/auth';



const Login = () => {

    const formRef = useRef()
    const history = useHistory()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const { email, password, remember } = await e.target.elements
        console.log();
        const data = {
            email: email.value,
            password: password.value,


        }

        console.log(data);
        const token = await postToDatabase("auth/login", data).then(user => {
            return user.data.access_token
        })

        if(remember.checked){
            login(token)
        }
        sessionLogin(token)
            window.location.href = '/'
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
                            <FormControlLabel id="remember" control={<Checkbox id="remember" defaultChecked color="primary" />} label="Lembrar" />
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