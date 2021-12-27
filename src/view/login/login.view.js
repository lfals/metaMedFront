import React from "react";
import { Button, Divider, FormControl,  TextField } from "@material-ui/core";
import { Container, Box } from "./style";
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return(
        <>
            <Container>
                <Box>
                    <h1>Bem vindo de volta!</h1>
                    <p>Faça login para continuar</p>
                    <Button><FcGoogle />Login com Google</Button>
                    <Divider/>
                        <FormControl sx={{mt:8}}>
                        <TextField
                            sx={{mt:8}}
                            id="outlined-name"
                            label="Email"
                            type="email"
                            variant="outlined"
                        />
                        </FormControl>
                        <FormControl>
                        <TextField
                            id="outlined-name"
                            label="Senha"
                            type="password"
                            variant="outlined"
                        />
                        </FormControl>
                        <Button>Login</Button>
                </Box>
            </Container>
        </>
    )

}

export default Login