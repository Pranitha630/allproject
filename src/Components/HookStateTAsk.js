import React, { useState } from 'react'


function HookStateTAsk() {                                                                                                                                                                                                                             
    const [num,setNum]=useState()
    // const [decnum,setDecNum]=useState()

    function changeInp(e){
        setNum(Number(e.target.value))
    }
    function limit(){
        if(num<=0){
            setNum(0)
        }else{
            setNum(num-1)
        }
    }
  
     


  return (
    <div>
        <button onClick={limit}>-</button>
        <input type='text' onChange={changeInp} value={num}></input>
      <button onClick={() =>setNum(num+1)}>+</button><br/>
      <h1>
        {num}
      </h1>
     
    </div>
  )
}

export default HookStateTAsk
