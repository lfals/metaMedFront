// eslint-disable-next-line no-unused-vars
import react, {useState}from 'react'
import { Paper, Table, TableBody,  TableHead, Modal, Typography, Box, Fade } from '@material-ui/core';
import { TableContainer, TableCell, TableRow } from './style';
import { FiEdit } from 'react-icons/fi';
import { UserAddModal } from '..';

const AcronymsDashboard = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    function createData(id, calories, fat, carbs, protein) {
        return { id, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('1', 'lorem ipsum dolor sit amet', 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet', '12/20/21', 4.0),
        createData('2', 237, 9.0, 37, 4.3),
        createData('3', 262, 16.0, 24, 6.0),
        createData('4', 305, 3.7, 67, 4.3),
        createData('5', 356, 16.0, 49, 3.9),
      ]

      

    return(
      <>
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='id'>id</TableCell>
              <TableCell >{props.title}</TableCell>
              <TableCell >Descrição</TableCell>
              <TableCell>Adicionado em</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const description = row.fat.toString().substring(0,50)
              const name = row.calories.toString().substring(0,20)
              return(
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className='id' >
                  {row.id}
                </TableCell>
                <TableCell className='name' >{name}</TableCell>
                <TableCell  className='description'>{description}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell className='editIcon'><FiEdit onClick={() =>setOpen(true) }/></TableCell>
              </TableRow>
              )
            })}
          </TableBody>
        </Table>
        </TableContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Fade in={open}>
          <UserAddModal/>
        </Fade>
        </Modal>
      </>
    )
}

export default AcronymsDashboard