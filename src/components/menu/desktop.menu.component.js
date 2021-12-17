import { Box, Button, Divider, Drawer, Link, List, ListItem,  ListItemIcon,  ListItemText, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import {pages, groups} from "../../controller/pages";

const user = {
  "role": "administrator"
}



const DesktopMenu = () => {

 
    return(

      <div>
        <Box
          sx={{width: 300}}
        >
          <List>
            {pages.map(page => {
             return(
              <Link key={page.name} href={page.route}>
              <ListItemText primary={page.name} />
              </Link>
             )
            })}
            
          </List>
        </Box>
      </div>
      
    
    )
}

export default DesktopMenu