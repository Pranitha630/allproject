import React from 'react'
import Card from 'react-bootstrap/Card';

function Welcomeprops({x}) {

  return (
    <div>

        <Card style={{ width: '18rem',height:'150px' 
          ,marginTop:'20px',backgroundColor:'yellowgreen'}}>
      <Card.Body>
        <p style={{fontSize:'15px'}}><b>WELCOME TO OUR NEW PAGE</b></p>
        <h2>Hello {x}</h2>


      </Card.Body>
    </Card>
    </div>
  )
}

export default Welcomeprops
