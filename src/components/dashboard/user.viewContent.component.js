import { Box, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { FiImage, FiArrowRight } from 'react-icons/fi'
import { TextContainer, Card, ImageContainer, CardParagraphTitle, Button, CardTitle, CardsContainer } from "./style";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 12,
    boxShadow: 24,
    maxHeight: '90vh',
    overflowY: `scroll`,
    paddingBotton: 12,
    p: 4,
};

const UserViewContent = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <CardsContainer  >
                {props.data.map(data => {
                    return (
                        <>
                            <Card>
                                <div >
                                    <h1 >{data.name}</h1>
                                    <p >{data.description}
                                    </p>
                                </div>
                                <TextContainer>  <Button onClick={handleOpen}>Detalhes <FiArrowRight /> </Button></TextContainer>

                            </Card>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <CardTitle>{data.name}</CardTitle>
                                    <p >{data.description} </p>

                                </Box>
                            </Modal>

                        </>
                    )
                })}



            </CardsContainer>



        </>
    )

}

export default UserViewContent