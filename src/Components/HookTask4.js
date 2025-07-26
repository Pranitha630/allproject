import React, { useState } from 'react'

function HookTask4() {
    const [text,setText] = useState()
    function textchange(e){
            setText(e.target.value)
    }
    function delText(){
    }
  return (
    <div>
      <input type='text' onChange={textchange}></input>
      <button >Clear</button>
    </div>
  )
}

export default HookTask4
