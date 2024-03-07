import React, { useContext } from 'react'
import { StateContext } from '../Context/AppProvider'
import { Col, Row } from 'react-bootstrap';
import { Card,Button } from 'react-bootstrap';

function Checkout() {
  const cartData=  useContext(StateContext)
  console.log(cartData.cartItems);
  return (
    <Row style={{minHeight:'70vh'}}>
       {
         cartData.cartItems.length>0 ?   cartData.cartItems.map((ele)=>(
                <Col sm={12} md={6} lg={6} xl={3} >
                 <Card style={{ margin:'10px',maxHeight:'600px' }}>
      <Card.Img variant="top" src={ele.img} />
      <Card.Body>
        <Card.Title>{ele.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Buy</Button>

      </Card.Body>
    </Card>
               
                </Col>

            )) : <h3 className='text-danger p-5 m-5 text-center '>Add some items to Checkout</h3>
        }

    </Row>
  
  )
}

export default Checkout
