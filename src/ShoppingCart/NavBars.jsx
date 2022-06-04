import React from 'react'
import { Badge} from '@mui/material'
import { Row,Navbar,Nav } from 'react-bootstrap'
import Data from './Data'
import './Products.css'
import { Search, ShoppingCart } from '@mui/icons-material'

const NavBars = ({ search, handle, menu, filterItems,setShops}) => {
     
  return (
    <>
    
    <Row className='bg-dark'>
        
     <Navbar className="d-flex justify-content-between">
        
     {menu.map((items,index)=>{
            return(<Navbar key={index}>
                <Nav.Link onClick={()=>filterItems(items)} className="text-light"> {items}</Nav.Link>
            </Navbar>)
      })};
      <Nav.Link onClick={()=>setShops(Data)} className="text-light">All</Nav.Link>
     <Navbar>
         <Nav.Link> <p style={{ marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}> <span><Search/></span><input type ="text" style ={{outline:"none",border:"2px solid black",borderRadius:"21px", width:"150px"}}
           value ={search ?? ""} onChange={handle} placeholder='search'/>  </p></Nav.Link>
         <Nav.Link> <Badge badgeContent={4} color="success">    <ShoppingCart/>  </Badge> </Nav.Link>
     </Navbar>
     </Navbar>

 </Row>
    </>
  )
}

export default NavBars