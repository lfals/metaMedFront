import { Box, Container, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { ManeuversAddModal } from '../../components/index'
import Button from '@mui/material/Button';
import { IoMdAddCircleOutline } from 'react-icons/io'


  const StyleBoxContainer = {
    position: 'Relative',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    
    p: 4,
  };


  const StyleButton = {
    
    margin: 'auto'
   
  };



const ManeuversDashboardAdd = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        
        <Box sx={StyleBoxContainer}>

        
        
        <Button sx={StyleButton} variant="contained" onClick={handleOpen}>Adicionar <IoMdAddCircleOutline  /> </Button>

        </Box>

        
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ManeuversAddModal />
      </Modal>
        </>
    )

}

export default ManeuversDashboardAdd