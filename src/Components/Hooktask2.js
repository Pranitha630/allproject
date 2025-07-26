import React, { useState } from 'react'

function Hooktask2() {
    const [npt,setNpt]=useState()
    function good(e){
        setNpt(e.target.value)
    }
  return (
    <div>
      <input type='text' onChange={good}></input>
      <h2>Name:{npt}</h2>
    </div>
  )
}

export default Hooktask2
