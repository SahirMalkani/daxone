
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import nnn1 from "../assets/quindim.png"
import nnn2 from "../assets/favicon.ico"
import nnn3 from "../assets/soursop.png"


const Saatwa =()=>{

   
    return (
   <>
      <div style={{marginTop:"1%" }}>     
      <Stack direction="horizontal" gap={3}>


<Card style={{ width: '18rem' }}>
      <Card.Img style={{ width: 20, height: 20 }} variant="top" src={nnn1} roundedCircle/>
 
<Card.Img style={{ width: 20, height: 20 }} variant="top" src={nnn2} roundedCircle />
<Card.Img style={{ width: 20, height: 20 }} variant="top" src={nnn3} roundedCircle/>

</Card>


</Stack>
</div>
</>
          );
        }

    
    
    export {Saatwa};