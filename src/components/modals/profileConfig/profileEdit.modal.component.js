import { Box, Modal } from "@material-ui/core";
import React, {  useRef, useState } from 'react'

import { Form, TextField, Button, Stack } from '../style.js'
import { ConfirmationModal } from "../../index"




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



const ProfileEdit = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    const formRef = useRef()


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password, repassword } = e.target.elements
        const data = {
            name: name.value,
            email: email.value,
            password: password.value,
            repassword: repassword.value,



        }


        console.log(data);
        //addToDatabase("user", data)
        //    const response = await getFromDatabase("user")
        //    console.log(response);
    }

    return (
        <Box sx={style}>

            <h1 >Editar</h1>




            <Form ref={formRef} onSubmit={handleFormSubmit}>

                <TextField sx={{ mb: 2, mt: 4 }} error={false} id="name" label="Nome Completo" type="name" />
                <TextField sx={{ mb: 2 }} error={false} id="email" label="Email" type="email" />
                <TextField sx={{ mb: 2 }} error={false} id="password" label="Senha" type="password" />
                <TextField sx={{ mb: 2 }} error={false} id="repassword" label="Senha" type="password" />

                <Stack direction="row" sx={{ alignItems: 'flex-end' }} spacing={2}>

                    <Button variant="text" color="error" onClick={handleOpen}>Excluir</Button>
                    <Button variant="contained" type="submit" onClick={props.close}>Salvar</Button>

                </Stack>
            </Form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ConfirmationModal id="" title="mauneverEdit" close={handleClose} />
            </Modal>
        </Box>
    )
}

export default ProfileEdit