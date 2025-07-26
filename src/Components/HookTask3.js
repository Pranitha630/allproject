import React, { useState } from 'react'

function HookTask3() {
  const [isDark,setSDark]=useState(false)
    // const [color,setColor]=useState('blue')
    // const clickable=color=>{
    //   setColor(color)
    // }
  


  return (
    <div className={`${isDark? 'dark':'light'} app`}>
      <button onClick={()=>setSDark(!isDark)}>ColorChange</button>
      
    </div>
  )
}

export default HookTask3
