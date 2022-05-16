import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Navbar,Row,Col } from 'react-bootstrap';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import Banner from './Banner';
import Resume from './ELLURIMAHESH.pdf'
import Intro from './Intro';
import "./Profile.css"

const Profile = () => {
      const [openmenu, setOpenmenu] = useState(false)
      
      
  return (
  <>
<Row  className="Profile">

      <Col xs={12}>
      
    <Navbar className='d-flex justify-content-between'>
      {/* brands NaMes */}
        <Navbar className="w-25" style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
            <Navbar.Brand className="p-2"> <h4 className="brand">M</h4></Navbar.Brand>
            <Navbar.Brand>
            <Button id='menuicons'
               onClick={()=>setOpenmenu(true)}
               >
            {openmenu ? <Close  onClick={()=>setOpenmenu(false)} /> :<MenuIcon/>}
        </Button>
            </Navbar.Brand>
        </Navbar>

{/* Navlist */}
        <Navbar className={openmenu ? "navLinks-mobile":"navLinks"}
               onClick={()=>setOpenmenu(false)}
        >
          
            <li className='project'>Project</li>
            <li className='skills'>Skills</li>
            <li className='Contacts'> Contact</li>
        </Navbar>
        {/* Rfesume */}
        <Navbar>
            <Navbar.Brand> <a href ={Resume} download> <Button variant="outlined"> Resume </Button> </a></Navbar.Brand>
        </Navbar>
       
    </Navbar>
    </Col>
    <Col  xs={2} style={{position:"relative"}}>
    <Banner/>
</Col>
 <Col className="text-light">
   <Intro/>
 </Col>
</Row>


    
    
    

  </>


  )
}

export default Profile


