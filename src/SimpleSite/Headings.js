import { Avatar, Button, Input, InputLabel, Tooltip} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navbar,Nav,Container,Modal} from 'react-bootstrap'
import {Link} from 'react-scroll';
import './Headers.css'

const Headings = () => {
 const [show, setShow] = useState(false);
const [username, setUsername] = useState()
const [navSize,setnavSize] = useState('5rem');
const [navcolor,setnavColor] = useState('transparent');

const [email,setEmail] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const submiter= (e)=>{
     e.preventDefault();
     setEmail('')
     setUsername('')
     console.log(username)
     console.log(email)
    }
   const listenScrollEvent=()=>{
     window.scrollY >10 ? setnavColor('black'):setnavColor('transparent');
     window.scrollY >10 ? setnavSize('5rem'):setnavSize('5rem');

   }

   useEffect(()=>{
     window.addEventListener('scroll',listenScrollEvent)
     return()=>{
       window.addEventListener('scroll',listenScrollEvent)
     }
   },[])
    
  

  return (
    <>

    
    <Navbar  className = "navbar fixed-top" style ={{transition:"all 2s",backgroundColor:navcolor, height:navSize}}expand="lg">
        <Container  style ={{display:'flex',justifyContent:"space-between",color:"green"}}>

        
    <Tooltip title="Profile" placement="top-start">
           <Avatar alt ="robo"  src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
          </Tooltip>
        <Nav.Link id="text-color" >Home
            
        </Nav.Link>
        <Nav.Link id="text-color"><Link to="service" smooth={true} offset={60} duration={500}> Services</Link></Nav.Link>
        <Nav.Link id="text-color">Globally</Nav.Link>
           <Nav.Link onClick={handleShow} id="text-color">Login
               </Nav.Link> 
           <Tooltip title="UserInfo" placement="top-start">
           <Avatar alt ="robos" src= "https://media.istockphoto.com/photos/irobot-touch-picture-id543190650?s=612x612"/>
          </Tooltip>
        </Container>
    </Navbar>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form onSubmit={submiter}>
             <InputLabel>  UserName</InputLabel>
             <Input type= 'text'
             className='form-control'             
              value ={username ?? ""}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder='....' required/>
              <InputLabel>Email</InputLabel>
              <Input type ="email"
              value ={email ?? ""}
              onChange={(e)=>setEmail(e.target.value)}
              className='form-control'
              placeholder='....' required/>
              <Input type="submit"
              className='form-control bg-success  text-light'
              value = "Submit"/>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" color='error' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Headings