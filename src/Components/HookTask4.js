import React, { useState } from 'react'

function HookTask4() {
    const [text,setText] = useState()
    function textchange(e){
            setText(e.target.value)
    }
    // function delText(){
    //   setText('')
    // }
  return (
    <div>
      <input type='text' onChange={textchange} value={text}></input>
      <button onClick={textchange}>Clear</button>
    </div>
  )
}

export default HookTask4
