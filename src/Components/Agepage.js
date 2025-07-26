import React from 'react'
import Card from 'react-bootstrap/Card';
function Agepage({aged}) {
  return (
    <div>
       <Card style={{ width: '18rem',height:'50px',backgroundColor:"lightgreen"
       }}>
      
      <div>
     {aged>=18? <p>eligible for vote</p>:<p>not eligible for vote</p>}
      </div>
    </Card>
    </div>
  )
}

export default Agepage




