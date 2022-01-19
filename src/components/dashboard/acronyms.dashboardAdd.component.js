import { Box, Container, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { UserAddModal } from '../../components/index'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Block } from "@mui/icons-material";
import AcronymsAddModal from "../modals/acronyms/acronymsAdd.modal.component";



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



const AcronymsDashboardAdd = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>

      <Box sx={StyleBoxContainer}>



        <Button sx={StyleButton} variant="contained" onClick={handleOpen}>Adicionar <IoMdAddCircleOutline /> </Button>

      </Box>



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AcronymsAddModal />
      </Modal>
    </>
  )

}

export default AcronymsDashboardAdd