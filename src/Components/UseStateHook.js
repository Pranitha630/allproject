import React, { useState } from 'react'

function UseStateHook() {
    // state manangement hook
    // syntax: const [state, setState] = useState(initialvalue)
    // setState => it is used to update the value of state

    const [num, setNum] = useState()
    const [fact, setFact] = useState()

    // setNum(56) 
    console.log("rendered");
    function handleChange(e){
        console.log(e);
        
        setNum(e.target.value)
    }

    function factorail(){
        let fa=1
        for(let i=1;i<=num; i++){
            fa*=i
        }
        setFact(fa)

    }
    


  return (
    <div>
        <input type='text' name='n' onChange={handleChange}></input>
        <button onClick={factorail}>click</button>
        {num  && fact && <h1>the factorial of {num} is {fact}</h1>}
       

      
    </div>
  )
}

export default UseStateHook
