import { Avatar, Button } from '@mui/material'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {auth} from './Firebase'
import { Routes, Route } from "react-router-dom";
import Products from '../ShoppingCart/Products';
import CartView from "../ShoppingCart/CartView";
const Home = ({presentUser}) => {
  return (
    <>
    <Navbar bg='dark' className='d-flex justify-content-between'>
    <Navbar>
    <Nav.Link><Avatar/></Nav.Link>
    <Nav.Link>  {presentUser.email}  </Nav.Link>
    </Navbar>

    <Navbar>
    <Nav.Link>
    <Button onClick={()=>auth.signOut()}>SignOUt</Button>
    </Nav.Link>
    </Navbar>

</Navbar>

 <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/CartView/:id" element={<CartView />} />
      </Routes> 



    </>
  )
}

export default Home