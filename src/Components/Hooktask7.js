import React, { useState } from 'react'

function Hooktask7() {
  const [traffic,SetTraffic]=useState('red')
  function changeColor(){
       if(traffic==='red'){
        SetTraffic('yellow')
       }else if(traffic==='yellow'){
            SetTraffic('green')
       }else{
        SetTraffic('red')
       }
  }

  return (
    <div>
      <button onClick={changeColor}>ChangeColor</button>
      <div style={{
        height:'100px',width:'100px',borderRadius:'50%',
        backgroundColor:traffic==='red'?'red':'white'
      }}>
       
      </div>
        <div style={{
        height:'100px',width:'100px',borderRadius:'50%',
        backgroundColor:traffic==='yellow'?'yellow':'white'
      }}>
       
      </div>
       <div style={{
        height:'100px',width:'100px',borderRadius:'50%',
        backgroundColor:traffic==='green'?'green':'white'
      }}>
       
      </div>
    </div>
  )
}

export default Hooktask7

