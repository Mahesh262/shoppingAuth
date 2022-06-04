import { Button, Typography } from '@mui/material'
import React from 'react'
import {Carousel, Col} from 'react-bootstrap'
import './Products.css'

const Banners = () => {
  return (
    <>
    
    
    <Col>
    <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src='https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?t=st=1653291326~exp=1653291926~hmac=30475cc6e0af66041151932564fcc80d86536a18dadb53d142c7749414704bb9&w=900'
      alt="First slide"
    />
    <Carousel.Caption>
      <Typography variant="h4" color="darkblue">First slide label</Typography>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <Button variant="outlined">AddCart</Button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg?t=st=1653291326~exp=1653291926~hmac=3c9191be8236aec5195a6c9e449856400af53a63ddc185f83a3605ce57988629&w=900"
      alt="Second slide"
    />
    <Carousel.Caption>
      <Typography variant="h4" color="darkblue">Second slide label</Typography>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button variant="outlined">AddCart</Button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/this-is-same-shoes_329181-1769.jpg?t=st=1653291326~exp=1653291926~hmac=dcda5d3e4553f776d92ab70ad53a795707a9c7921598df19b9ef59bc467e186b&w=900"
      alt="Third slide"
    />
    <Carousel.Caption>
      <Typography variant="h4" color='darkblue'>Third slide label</Typography>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
       <Button variant="outlined">AddCart</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

         {/* <h2  style ={{color:'#0cbaba'}}> If You Bought It on Sale, <small  style ={{color:"#eec0c6"}}>  You Can save Your Money </small> </h2> */}
     </Col>
    </>
  )
}

export default Banners