import { Avatar, Button } from '@mui/material'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {auth} from './Firebase'
const Home = ({presentUser}) => {
  return (
    <>

 <p> {presentUser.email}  </p>

<Navbar className='d-flex justify-content-between'>
    <Navbar>

    <Nav.Link><Avatar/></Nav.Link>
    <Nav.Link>Purchases</Nav.Link>
    <Nav.Link>produtcs</Nav.Link>
    </Navbar>

    <Navbar>
    <Nav.Link>
    <Button onClick={()=>auth.signOut()}>SignOUt</Button>
    </Nav.Link>
    </Navbar>

</Navbar>
    </>
  )
}

export default Home