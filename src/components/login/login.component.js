import React from "react";
import { Link, FormControlLabel, TextField } from "@material-ui/core";
import { Container, FormGroup, Box, Checkbox, ButtonGoogle, ButtonLogin } from "./style";
import { FcGoogle } from 'react-icons/fc';

import Divider from '@mui/material/Divider';



const Login = () => {


    return (
        <>
          
            <Container>
             
                <Box flexDirection="column">
                    <h1>Bem vindo de volta!</h1>
                    <p>Faça login para continuar</p>
                    <ButtonGoogle fullWidth><FcGoogle />Login com Google</ButtonGoogle>
                    <Divider >
                        <p>ou</p>
                    </Divider>
                    <TextField fullWidth id="email" label="Email" variant="outlined" margin="normal" />
                    <TextField fullWidth id="password-" label="Senha" type="password" variant="outlined" margin="normal" />
                    <FormGroup fullWidth>
                        <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Lembrar" />
                        <Link href="#" underline="always">
                            {'Esqueceu a senha?'}
                        </Link>
                    </FormGroup>
                    <ButtonLogin fullWidth >Login</ButtonLogin>
                </Box>
            </Container>
        </>
    )

}

export default Login