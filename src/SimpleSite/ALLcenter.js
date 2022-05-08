import React from 'react'
import Headings from './Headings'
import Banners from './Banners'
import ProductsCards from './ProductsCards'
import Products from './Products'
import { Testimonial } from './Testimonial'
// import { Route, Routes } from 'react-router'
// import { BrowserRouter } from 'react-router-dom'

const ALLcenter = () => {
  return (
    <>
      <Headings/>
      <Banners/>
<ProductsCards/>
<Products/>
<Testimonial/>

    </>
  )
}

export default ALLcenter