import React from 'react'
import { Carousel } from 'react-bootstrap'

const Products = () => {
  return (
    <>
    
    <Carousel className='pt-5'>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src='https://cdn.pixabay.com/photo/2022/03/16/06/18/bird-7071662__480.jpg'
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/11/19/15/06/bridge-3825439__340.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://cdn.pixabay.com/photo/2022/02/28/04/50/nature-7038455__340.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </>
  )
}

export default Products