import { Avatar, Button } from '@mui/material'
import React from 'react'
import { Container, Navbar, Row,} from 'react-bootstrap'
import './Banner.css'
const Banners = () => {
  return (
    <>
 <Navbar id ="images">
    <Container id="brandname">
     <h1>UI Materials</h1>
        <Row>
     <b> <span style ={{display:"flex", color:"azure",justifyContent:"space-between",alignItems:"center"}}> <Button variant='outlined' color="inherit">Get Started </Button> &nbsp; <Avatar alt="dsds" src= 'https://images.unsplash.com/photo-1645815431072-c2ef5ad0bf53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>       
         &nbsp;<span>View in gitHub</span> </span>  </b> 
        </Row>
        </Container> 
 </Navbar>
    
    </>
  )
}

export default Banners