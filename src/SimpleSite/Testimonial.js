import { Diamond, Newspaper } from '@mui/icons-material'
import React from 'react'
import { Row,Col} from 'react-bootstrap'
import Video from "./video.mp4"
import "./testmoni.css"
export const Testimonial = () => {
  return (
    <>
     <Row className='pt-5' id="service">
         <Col sm={12} xl={4}id="tesimonial">
             <h1>Our Services</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
         </Col>
         <Col sm={12} xl={4} id ="testmonial-diamond">
             <h6><Diamond style ={{width:"100px",height:"50px"}}/></h6>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
         </Col> 
          <Col sm={12} xl={4} id ="testmonial-NewsLettr">
           
             <h6><Newspaper style ={{width:"100px",height:"50px"}}/></h6>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
         </Col> 
         <Col sm={12} xl={4} id ="testmonial-NewsLettr">
           
           <h6><Newspaper style ={{width:"100px",height:"50px"}}/></h6>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
       </Col> 
       <video className='videoTag' autoPlay loop muted>
         <source src= {Video} type ="video/mp4"/>
       </video>
     </Row>
     
    </>
  )
}
