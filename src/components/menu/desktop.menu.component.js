import { List } from "@material-ui/core";
import React from "react";
import {pages} from "../../controller/pages";
import { Box, Link, ListItemText } from "./style";

const user = {
  "role": "user"
}


const DesktopMenu = () => {

  

    return(

      <div>
        <Box>
          <List>
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
      </div>
      
    
    )
}

export default DesktopMenu