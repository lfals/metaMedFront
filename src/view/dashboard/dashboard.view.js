
import React from "react";
import {CardContent, Container, CardTitle, Paper } from "./style";


const Dashboard = () => {
    return ( 
        <Container>
        
           
            <Paper elevation={3}> 
                <CardTitle>Manobras</CardTitle>
                <CardContent>36</CardContent>


            </Paper >
            <Paper elevation={3}> 
                <CardTitle>Siglas</CardTitle>
                <CardContent>06</CardContent>

            </Paper >
            <Paper elevation={3}> 
                <CardTitle>Usuários</CardTitle>
                <CardContent>236</CardContent>

            </Paper >
            
        </Container>
       
        )
   
}

export default Dashboard; 