import React from "react";
import { Link, Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { Container, FormGroup, Box, ButtonGoogle, ButtonLogin} from "./style";
import { FcGoogle } from 'react-icons/fc'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };

const Login = () => {
    
    return(
        <>
            <Container>
                <Box sx={style}>    
                    <h1>Bem vindo de volta!</h1>
                    <p>Faça login para continuar</p>
                    <ButtonGoogle fullWidth><FcGoogle />Login com Google</ButtonGoogle>
                   
                    <TextField fullWidth id="email" label="Email" variant="outlined" margin="normal" />

                    <TextField fullWidth id="password-" label="Senha" type="password" variant="outlined" margin="normal" />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
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