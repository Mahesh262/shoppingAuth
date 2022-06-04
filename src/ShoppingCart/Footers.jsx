import {Instagram, Twitter } from '@mui/icons-material'
import {FiFacebook} from 'react-icons/fi';
import {SiVisa} from 'react-icons/si'
import {FaCcMastercard,FaCcPaypal,FaGooglePay,FaAmazon} from 'react-icons/fa'


import React from 'react'
import { Col, Row,} from 'react-bootstrap'
import './Footers.css'
const Footers = () => {
  return (
    <>
    <Row className="footers">
    <Row className='text-center'>
     <p> #Evocation Form</p>
      <p>FaQ</p>
      <p>Returns</p>
      <p>Shipping</p>
      <p>Contact</p>
      <p>Size Instructions</p></Row> 
      <Row className="justify-content-center" style ={{display:"flex",gap:"20px"}}>
      <Col xs={1} xl={1} className="social-media"><FiFacebook/></Col>
          <Col xs={1}xl={1}  className="social-media"><Instagram/></Col>
          <Col xs={1} xl={1}  className="social-media"><Twitter/></Col>
      </Row>
      <Row className="pt-3">
              <p  className='terms'>Site By Agency <li> CopyRight Exavigency GBMh 2017 </li> Terms &conditions | Privacy | Legal Notice</p>


       <Row>
          <Col><SiVisa style ={{fontSize:"50px"}}/></Col>
          <Col><FaCcMastercard style ={{fontSize:"50px"}}/></Col>
          <Col><FaCcPaypal style ={{fontSize:"50px"}}/></Col>
          <Col><FaGooglePay style ={{fontSize:"50px"}}/></Col>
           <Col><FaAmazon style ={{fontSize:"47px"}}/></Col>


           </Row>       
      </Row>
    </Row>
    </>
  )
}

export default Footers