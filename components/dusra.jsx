
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import nnn1 from "../assets/favicon.ico"


const Dusra=()=>{

   
    return (
   <>
<div style={{marginTop:"1%" }}>      
      
      
      
      
      
      <Stack direction="horizontal" gap={5}>



            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" style={{height:'40px', width: '40px',alignSelf: 'center' }}  src={nnn1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Go somewhere</Button>
              </Card.Body>
            </Card>

<Card style={{ width: '20rem' }}>
<Card.Img variant="top" style={{height:'40px', width: '40px',alignSelf: 'center' }}  src={nnn1} />
<Card.Body>
  <Card.Title> Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="outline-primary">Go somewhere</Button>
</Card.Body>
</Card>


<Card style={{ width: '20rem' }}>
<Card.Img variant="top" style={{height:'40px', width: '40px',alignSelf: 'center' }}  src={nnn1} />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="outline-primary">Go somewhere</Button>
</Card.Body>
</Card>

</Stack>
</div>
</>
          );
        }

    
    
    export {Dusra};