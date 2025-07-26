import React from 'react'
import Card from 'react-bootstrap/Card';
function ItemsShow({n,d,j,im}) {
  
  

  return (
    <div>
      <Card style={{ width: '18rem',height:'250px'}}>
      <h1>name is:{n}</h1>
      <h1>color is:{d}</h1>
      <h1>quantity is:{j}</h1>
      <img style={{width:'50px',height:'50px'}} src ={im}/>
      
    </Card>
    </div>
  )
}

export default ItemsShow
