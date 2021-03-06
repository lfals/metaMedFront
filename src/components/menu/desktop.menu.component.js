import { Divider, Modal, Fade, List, Tooltip, ListItemIcon, MenuItem } from "@material-ui/core";
import react, { useState } from 'react'
import { pages } from "../../controller/pages";
import { Box, Link, ListItemText, MenuContainer, ProfileHolder, ProfileTextHolder, Avatar, Menu, PopupMenuText, CompanyLogo } from "./style";
import { FiSettings } from 'react-icons/fi'
import { Logout, Settings } from "@mui/icons-material";
import ProfileEdit from "../modals/profileConfig/profileEdit.modal.component"
import { logout } from "../../helper/auth";


const user = {
  "role": "administrator"
}


const DesktopMenu = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    logout()
    window.location.href = '/'
  }

  return (

    <MenuContainer>
      <Box>
        <List>
          <CompanyLogo>MetaMed</CompanyLogo>
          {pages.map(page => {
            if (page.access.indexOf(user.role) > -1) {
              return (
                <Link key={page.name} to={page.route}>
                  <ListItemText primary={page.name} />
                </Link>
              )
            }
          })}

        </List>
      </Box>
      <Tooltip title="Configuração de Conta">
        <ProfileHolder onClick={handleProfileOpen}>
          <ProfileTextHolder >
            <h1>Luis Amorim</h1>
            <FiSettings />
          </ProfileTextHolder>
        </ProfileHolder>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <PopupMenuText>
          <h1>Luis Amorim</h1>
          <p>Administrador</p>
        </PopupMenuText>
        <Divider />
        <MenuItem onClick={() => setOpenModal(true)}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon >

          <p  >Settings</p>
        </MenuItem>
        <MenuItem onClick={() => handleLogOut()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <ProfileEdit close={handleCloseModal} />

      </Modal>
    </MenuContainer>


  )
}

export default DesktopMenu