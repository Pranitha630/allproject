import React from 'react'
import {useLocation} from 'react-router-dom'

function WElcomePageForm() {
    let locaction=useLocation()
    console.log(locaction);
    let uname=location.state||''
    
    
  return (

    <div>
      <h1>welcome</h1>
      {uname}
    </div>
  )
}

export default WElcomePageForm
