import React, { useState } from 'react'

function Hooktask9() {
    const [multiNum,setMulti]=useState()
    function stormulti(e){
        setMulti(e.target.value)
    }
    function multitable(){
        let res=0
       for( let i=1;i<=10;i++){
        res=multiNum*i
       }
       setMulti(res)
    }

  return (
    <div>
      <input type='text' onChange={stormulti}></input>
      <button onClick={multitable}>Generate MUltiTable</button>
      <h2>Multilicaion table for {multiNum} is</h2>
      <p>{}</p>
    </div>
  )
}

export default Hooktask9
