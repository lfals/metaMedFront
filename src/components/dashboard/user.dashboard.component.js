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

const UserDashboard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <CardsContainer>
        <Card sx={{ minWidth: 275, minHeight: 500 }}>
            <TextContainer>
                <h1>Sigla</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            </TextContainer>
            <Button onClick={handleOpen}>Detalhes <FiArrowRight/> </Button>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 500 }}>
            <TextContainer>
                <h1>Sigla</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            </TextContainer>
            <Button onClick={handleOpen}>Detalhes <FiArrowRight/> </Button>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 500 }}>
            <TextContainer>
                <h1>Sigla</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            </TextContainer>
            <Button onClick={handleOpen}>Detalhes <FiArrowRight/> </Button>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 500 }}>
            <TextContainer>
                <h1>Sigla</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            </TextContainer>
            <Button onClick={handleOpen}>Detalhes <FiArrowRight/> </Button>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 500 }}>
            <TextContainer>
                <h1>Sigla</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            </TextContainer>
            <Button onClick={handleOpen}>Detalhes <FiArrowRight/> </Button>
        </Card>
        
        
        </CardsContainer>
      
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CardTitle>Titulo</CardTitle>
            <CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            <CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            <CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            <CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            <CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            <CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
            <CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p><CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p><CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p><CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p><CardParagraphTitle>Título</CardParagraphTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fusce risus sed in nunc, metus nunc, pharetra viverra. Fames massa nunc neque, viverra egestas aenean vel parturient. Egestas aliquet in consectetur elementum eu. </p>
        </Box>
      </Modal>
        </>
    )

}

export default UserDashboard