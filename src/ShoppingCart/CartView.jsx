import { Button } from '@mui/material'
import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import {Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const CartView = () => {
    let cart =useSelector(state=>state)
    let dispatch= useDispatch()
     const [value, setValue] = useState(3.4)
     
  return (
    <>
    <Row>

      <Col> 
     {cart.map((items)=>{
         items.count= 1;
         return(
             <Row key={items.id} className="pt-4">

               <Col style={{width:"18rem"}}>
                 <img src={items.img} alt ="...." width="300px"/>
                 </Col>

                <Col>
                 <h2>{items.Brand}</h2>
                 <p>{items.description}</p>
                 <p> Quantity: <b>{items.Quantity}</b></p>

                 <Button size="large"  variant= "outlined"color="success" onClick={()=>dispatch({type:"INCS", payload:items})}>+</Button>
                 <Button  size="large"   variant= "outlined"color="error"onClick={()=>dispatch({type:"RMV", payload:items})}>-</Button>
                 <Button variant="outlined"color="error" onClick={()=>dispatch({type:"CLR",payload:items})}>Remove</Button>

                 <p> price: $<em>{items.price}</em></p>
                 <p>  Total price: <b> {items.Quantity*items.price}   </b></p>
                  <p>  <Rating name ="read-only" value= {value} onChange={(event,newValue)=>{setValue(newValue)}}/> </p>
                 </Col>
                  <Button variant="contained" color="success">Checkout</Button>

             </Row>
         )
     })}
     </Col>
     </Row>
    
    </>
  )
}

export default CartView