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
                    <h1>Cadastro</h1>
                    <p>Preencha os campos para continuar</p>
                    <ButtonGoogle fullWidth><FcGoogle />Cadastrar com Google</ButtonGoogle>
                    <Divider >
                        <p>ou</p>
                    </Divider>
                    <TextField fullWidth id="name" label="Nome Completo" variant="outlined" margin="normal" />
                    <TextField fullWidth id="email" label="Email" variant="outlined" margin="normal" />
                    <TextField fullWidth id="password" label="Senha" type="password" variant="outlined" margin="normal" />
                    <TextField fullWidth id="password-confirm" label="Confirmação de senha" type="password" variant="outlined" margin="normal" />
                    <FormGroup fullWidth>
                        <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Concordo com os Termos e Condições" />    
                    </FormGroup>
                    <ButtonLogin fullWidth >Cadastrar</ButtonLogin>
                    <Divider />
                    <Link href="#" underline="always">
                            {'Já possui uma conta?'}
                    </Link>
                </Box>
            </Container>
        </>
    )

}

export default Login