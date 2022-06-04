
import React from 'react'
import {Button} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Card,Col, } from 'react-bootstrap'
import Data from './Data'
import { Link } from 'react-router-dom'
import './Products.css'
import NavBars from './NavBars'
import Banners from './Banners'
import { ShoppingCart } from '@mui/icons-material'
import Footers from './Footers'

const Products = () => {
  const [search, setSearch]= React.useState('')
  const [shops, setShops]= React.useState(Data)
    const carts = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(carts)
     console.log(Data.quantity)
// fitlers
  const menu = [...new Set(shops.map(items=>items.type))];

   const filterItems = (cartItem)=>{
      let temp= Data.filter((neval)=>{ 
        return neval.type === cartItem});
       setShops(temp);
   }

//  search filters
  const handle= (e)=>{
    setSearch(e.target.value)
  }



  return (
    <>

    <Row>
     <NavBars  search={search} handle={handle} filterItems={filterItems} menu={menu} setShops={setShops}/>
 <Row>
      <Banners/>
 </Row>

   <Row className='pt-5'>

     {/* getting data */}


    {shops.filter(crtypto =>crtypto.Brand.toLowerCase().includes(search.toLowerCase()))
    .map((items)=>{
        return(
   <Col  xs={6} sm={4} key={items.id}>
<Card className ="products-carts">
    <h3
    >  <Link to ={"/CartView/"+items.id}><img src={items.img} alt ="..." width="100%"  style ={{ height:"300px"}}onClick={()=>dispatch({type:"ADD",payload:items})}/>  </Link></h3>

     <Card.Body  className="products-details">
         <Col xl={2}> 
          <Button onClick={()=>dispatch({type:"ADD", payload:items})} variant="outlined" color="info"> <ShoppingCart/></Button>
         
         </Col>
         <Col xl={2}>
           <p> {items.ratings}</p>

         </Col>
     </Card.Body>
</Card>
</Col>

        )
    })}
    </Row>

<Row>
  <Footers/>
</Row>
    
 </Row>
    </>
  )
}

export default Products