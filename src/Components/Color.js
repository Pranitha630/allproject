import React from 'react'
import Child1 from './Child1'



function Color({cl}) {
  return (
    <div>
        {/* <Card style={{ width: '18rem',height:'200px', backgroundColor:'blueviolet' }}> */}
      
        {cl.map((ob)=><div style={{backgroundColor:` ${ob}`,width:'100px',height:'50px'}}>
        </div>)}

         <Child1>
      
    </Child1>
  
    </div>

   
  )
}

export default Color
