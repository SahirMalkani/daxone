
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import nnn1 from "../assets/img/bg-showcase-1.jpg"

const Teesra =()=>{

   
    return (
   <>
   <div style={{marginTop:"1%" }}>     
      <Stack direction="horizontal" gap={2}>




<Card style={{ width: '25rem' }}>
<Card.Img variant="top" src="" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="outline-primary">Go somewhere</Button>
</Card.Body>
</Card>



<Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={nnn1} />

             
              
            </Card>


</Stack>
</div>
</>
          );
        }

    
    
    export {Teesra};