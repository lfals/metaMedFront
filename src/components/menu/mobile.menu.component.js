import { Box, Button, Divider, Drawer, List, ListItem,  ListItemIcon,  ListItemText, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import {pages, groups} from "../../controller/pages";

const user = {
  "role": "administrator"
}



const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (status) => {
    setOpen(status)
  };


  const list = () => (
    <Box
      sx={{width: 300}}
      onClick={ () =>toggleDrawer(false)}
    >
      <List>
        
        {groups.map((groupName, index) => (
          <ListItem key={groupName.name}>
          <ListItemText primary={groupName.name} />
            <List>
                {pages.map((pageName, index) => {
                  if (groupName.name === pageName.group) {
                    return(
                      <ListItem button key={pageName.name}>
                        <ListItemText primary={pageName.name} />
                      </ListItem>
                    )
                  }
                })}
            </List>
        </ListItem>
        ))}
      </List>
     </Box>
  );
    return(

      <div>
          <Button onClick={() => toggleDrawer(true)}>Menu</Button>
          <Drawer
          open={open}
          OnClose={() => toggleDrawer(false)} 
          onClick={() =>toggleDrawer(false)}>
            {list()}
          </Drawer>
      </div>
      
    
    )
}

export default MobileMenu