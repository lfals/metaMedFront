import { Divider, List,  Tooltip,ListItemIcon, MenuItem  } from "@material-ui/core";
import React from "react";
import {pages} from "../../controller/pages";
import { Box, Link, ListItemText, MenuContainer, ProfileHolder, ProfileTextHolder, Avatar, Menu, PopupMenuText, CompanyLogo } from "./style";
import { FiSettings } from 'react-icons/fi'
import { Logout, Settings } from "@mui/icons-material";

const user = {
  "role": "administrator"
}


const DesktopMenu = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

    return(

      <MenuContainer>
        <Box>
          <List>
          <CompanyLogo>MetaMedi</CompanyLogo>
            {pages.map(page => {
              if(page.access.indexOf(user.role) > -1){
                return(
                  <Link key={page.name} href={page.route}>
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
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </MenuContainer>
      
    
    )
}

export default DesktopMenu