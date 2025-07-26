import React from 'react'

import Card from 'react-bootstrap/Card';


function Childprops({a,b}) {
  return (
    <div>
   <Card style={{ width: '18rem',height:'200px', backgroundColor:'blueviolet' }}>
      <Card.Body>
        <h1>Name:{a} Age:{b}</h1>
      </Card.Body>
       <button style={{width:'200px',height:'60x', marginBottom:'50px',
        marginLeft:'20px',backgroundColor:'darkblue',color:'white',borderRadius:'10px'}}>
          click new page</button>
    </Card>
   
    </div>
  )
}

export default Childprops
