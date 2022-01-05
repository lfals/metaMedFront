import { Box, Container, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { UserAddModal } from '../../components/index'
import { FiImage, FiArrowRight } from 'react-icons/fi'
import { TextContainer, Card, ImageContainer, CardParagraphTitle, CardTitle, CardsContainer } from "./style";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';




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
    
    
    p: 4,
  };

  
  const rows = [
    
  ];




const UserDashboardAdd = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        
        <Box sx={StyleBoxContainer}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Inscrito em</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.Fullname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.registerDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" addIcon={<addIcon />} onClick={handleOpen}>Adicionar</Button>

        </Box>

        
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserAddModal />
      </Modal>
        </>
    )

}

export default UserDashboardAdd