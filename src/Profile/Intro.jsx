import {ArrowRightAlt, ArrowRightSharp} from '@mui/icons-material'
import React from 'react'
import {Row,Col } from 'react-bootstrap'
import './Intro.css'
const Intro = () => {
  return (
    <>

   
    <Row className="p-3">
        <p className='intro'>My Name  is</p>
         <Row className='Intro-head'>
             <h1>Mahesh Elluri.</h1>
             <h3>I Build things for the web</h3>
          <p>I'm a software engineer Intern specializing in building exceptional digital experience .Currently,I'm focused onbuilding accessible, human-centered product at SleekSky</p>
         </Row>
            <Col><button className ="Hero-buton"> Checkout More Abot Me <ArrowRightAlt style={{width:"50px"}}/></button>   </Col>  
        </Row>

        {/* About Section */}

        <Row className="Intro-S">
         <Col>
             <h5>About Me <p  style ={{width:"15%",border:"0.5px solid white",backgroundColor:"white"}}></p></h5>
         </Col>
         <Col className="Intro-Self">
         <p> Hello! My name is Mahesh and I enjoy Creating things that live on the internet .My interest in web developemnt started back in 2021 when I decided to try creating static sites  turn ouy hacking together a static site taught me a lot about  CSS! </p>
           <p>Fast-forward to today, and I've had the privilage of working at an start-up and a product based company .My main focus these days is builiding accessible, inclusive products and digital experience for a variety of clients</p>
           <p> Here are  a few technologies  I've been working with recently:</p>
         </Col>
         <Col className='Intro-Tech'>
           <Col xs={4}> <h5> <ArrowRightSharp style={{color:"orange",fontSize:"30px"}}/>React js </h5>
               <h5> <ArrowRightSharp style={{color:"orange",fontSize:"30px"}}/>Redux</h5>
            <h5> <ArrowRightSharp style={{color:"orange",fontSize:"30px"}}/>Javascript(ES6+) </h5></Col>
            <Col>
           
           <h5> <ArrowRightSharp style={{color:"orange",fontSize:"30px"}}/>Bootstrap</h5>
           <h5><ArrowRightSharp style={{color:"orange",fontSize:"30px"}}/> CSS</h5>
           <h5> <ArrowRightSharp style={{color:"orange",fontSize:"30px"}}/>Material-ui</h5>
           </Col>
             
        </Col>
       
        </Row>
        <Row>
        <h1>Contact: 
             <h5>maheshilluri262@gmail.com</h5>

             </h1>
        </Row>
        
        
        </>
  )
}

export default Intro