import { Facebook, HeartBroken, Instagram, LinkedIn, Share, Twitter, YouTube } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import {Container, Row,Card ,Col} from 'react-bootstrap'
import './Profie.css'
const ProductsCards = () => {
  return (
    <>
    
  <Container  className="mt-5 justify-content-center">
    <Row style ={{display:"flex", alignItems:"center",justifyContent:"space-between",flexShrink:"10%",flexWrap:"wrap" ,flexBasis:"100%",}}>
        <Col style={{padding:"20px"}}>
        <Card id="profile"style ={{width:"18rem"}}>
        <Card.Body style ={{display:"flex",justifyContent:"space-between"}}>
         <div><h3>Valter</h3>
         <p>CEO</p>
         </div>
         <div style ={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
           <div>
             <Share/>
           </div>
           <Facebook style={{color:'blue'}}/>
           <HeartBroken style={{color:'red'}}/>
           <LinkedIn style={{color:'blue'}}/>
           <Instagram style={{color:'red'}}/>
           <Twitter style={{color:'blue'}}/>
           <YouTube style={{color:'red'}}/>
         </div>
          </Card.Body>
         <Card.Footer><Button variant="contained"> Addcart </Button></Card.Footer>

        </Card>
        </Col>
        
        <Col style={{padding:"20px"}}>
        <Card id="profile"style ={{width:"18rem"}}>
        <Card.Body style ={{display:"flex",justifyContent:"space-between"}}>
         <div><h3>Valter</h3>
         <p>CEO</p>
         </div>
         <div style ={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
           <div>
             <Share/>
           </div>
           <Facebook style={{color:'blue'}}/>
           <HeartBroken style={{color:'red'}}/>
           <LinkedIn style={{color:'blue'}}/>
           <Instagram style={{color:'red'}}/>
           <Twitter style={{color:'blue'}}/>
           <YouTube style={{color:'red'}}/>
         </div>
          </Card.Body>
         <Card.Footer><Button variant="contained"> Addcart </Button></Card.Footer>

        </Card>

        </Col>
        <Col style={{padding:"20px"}}>
        <Card id="profile"style ={{width:"18rem"}}>
        <Card.Body style ={{display:"flex",justifyContent:"space-between"}}>
         <div><h3>Valter</h3>
         <p>CEO</p>
         </div>
         <div style ={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
           <div>
             <Share/>
           </div>
           <Facebook style={{color:'blue'}}/>
           <HeartBroken style={{color:'red'}}/>
           <LinkedIn style={{color:'blue'}}/>
           <Instagram style={{color:'red'}}/>
           <Twitter style={{color:'blue'}}/>
           <YouTube style={{color:'red'}}/>
         </div>
          </Card.Body>
         <Card.Footer><Button variant="contained"> Addcart </Button></Card.Footer>
        </Card>
        </Col>
        <Col style={{padding:"20px"}}>
        <Card style ={{width:"18rem",
         height:"50vh", 
         display:"flex",
         justifyContent:"space-between",
        alignItems:"center",
        }}>
           <div  style={{width:"100%", 
           display:"flex",
           flexDirection:"column", 
           justifyContent:"space-between",
           alignItems:"center",
           background:"url('https://cdn.pixabay.com/photo/2022/02/26/21/47/elephant-7036431_960_720.jpg')",
           backgroundSize:"cover",
           backgroundPosition:"center",
           height:"50%"
           }}>
           <Card.Header style={{marginTop:"120px"}}><Avatar alt="srdsd" src="https://cdn.pixabay.com/photo/2022/02/26/21/47/elephant-7036431_960_720.jpg" style ={{width:"8rem",height:"8rem"}}/></Card.Header>
           </div>
         <div><Button variant="outlined"> Profile card</Button></div>
        </Card>
        </Col>
    </Row>
  </Container>
    
    </>
  )
}

export default ProductsCards