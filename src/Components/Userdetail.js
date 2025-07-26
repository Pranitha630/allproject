import React from 'react'
import Card from 'react-bootstrap/Card';
function Userdetail({usn,eml,rl}) {
  return (
    <div>
        <Card style={{ width: '18rem',height:'130px',backgroundColor:'brown'}}>
      <p>username is:{usn}</p>
      <p>Email id:{eml}</p>
      <p>Roll:{rl}</p>
     
      
    </Card>
    </div>
  )
}

export default Userdetail
