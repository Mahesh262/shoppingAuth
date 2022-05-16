import { Facebook, GitHub, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material'
import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './Intro.css'
const Banner = () => {

   const data=[{
     id:1,
     icon:LinkedIn,

   },
   {
    id:2,
    icon:GitHub,

  },
  {
    id:3,
    icon:Facebook,

  },
  {
    id:4,
    icon:Instagram,

  },
  {
    id:5,
    icon:WhatsApp,

  },
  

]
 
    
  return (
    <>
    
    <div style ={{width:"20%",height:"100vh",position:"fixed",color:"green",}}>
   <Row style ={{  height:"100vh",display:"flex",gap:"20px", textAlign:"center",alignContent:"flex-end", justifyContent:"center"}}>
    {data.map(items=>{ 
      return(
  <Col xs={12} key ={items.id}> <motion.p
      animate={{opacity:1, rotate:360, scale:[1,2,1]}}
      transition={{duration:2,}}

   >
     <items.icon  style ={{fontSize:"30px"}} className='Social-Icons'/>
     </motion.p>
   </Col>)
   })}

   <Col  xs={1} className='justify-content-center align-content-center' style ={{height:"45vh"}}>
     <div style ={{backgroundColor:"white",width:"2px",borderRadius:"100px", height:"50vh"}}></div>
     </Col>
   </Row>  
   
      </div>  
    
    </>
  )
}

export default Banner;