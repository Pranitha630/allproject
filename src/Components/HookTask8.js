import React, { useState } from 'react'

function HookTask8() {
    const[num,SetNum]=useState()
    function checknum(){
         if(num%3===0&& num%5===0){
            SetNum('fizzbuzz')
         }else if(num%3===0){
          SetNum('fizz')
         }else if(num%5===0){
          SetNum('buzz')
         }else{
          SetNum(num)
         }
         
    }
    function storeInpt(e){
          SetNum(e.target.value)
    }
    
  return (
    <div>
      <input type='text' onChange={storeInpt} ></input>
      <button onClick={checknum}>CheckNumber</button>
      <p>the number is :{num}</p>
    </div>
  )
}

export default HookTask8
