import React, { useState } from 'react'

function Hooktask5() {
 const [inpt,setInpt] = useState('')
     function textStore(e){
             setInpt(e.target.value)
            }
            
  return (
    <div>
      <input type='text' onChange={textStore} value={inpt}/>
     <p>the length is:{inpt.length}</p>
    </div>
  )
}

export default Hooktask5
