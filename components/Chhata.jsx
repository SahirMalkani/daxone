
import nnn1 from "../assets/img/testimonials-1.jpg"

import nnn2 from "../assets/img/testimonials-2.jpg"

import nnn3 from "../assets/img/testimonials-3.jpg"

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const Chhata =()=>{

   
    return (
   <>
      




    <Container>
      <Row>
        <Col xs={4} md={4}>
          <Image  style={{ width: 100, height: 100 }} src={nnn1} roundedCircle />
          <h6>this and htat </h6>
          <p>this and htat </p>
        </Col>
        <Col xs={4} md={4}>
          <Image  style={{ width: 100, height: 100 }} src={nnn2} roundedCircle />
          <h6>this and htat </h6>
          <p>this and htat </p>
        </Col>
        <Col xs={4} md={4}>
          <Image  style={{ width: 100, height: 100 }} src={nnn3} roundedCircle />
          <h6>this and htat </h6>
          <p>this and htat </p>
        </Col>
      </Row>
    </Container>








</>
          );
        }

    
    
    export {Chhata};