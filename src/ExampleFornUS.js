import React, { useState } from 'react'

function ExampleFormUs() {
    const [details, setDetails] = useState({})
    function handleChange(e){
        // console.log({...details});
        if(e.target.name==="isAgree"){
            setDetails({...details,[e.target.name]:e.target.checked})
        }
        else{
        
setDetails({...details,[e.target.name]:e.target.value})
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(details.isAgree){
        console.log(details);


        }
        else{
            alert("you must agree the terms")
        }
        

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' onChange={handleChange}></input>
            <input type='text' name='pwd' onChange={handleChange}></input>
            <input type='text'name='mail'  onChange={handleChange}></input>
            <select name='num'onChange={handleChange} >
                <option value="1">one</option>
                <option>two</option>
                <option>three</option>
            </select>
            <input type='radio' name='gender' value="male"  onChange={handleChange}></input>
            <label>male</label>
            <input type='radio' name='gender' value="female" onChange={handleChange}></input>
            <label>femlae</label>
            <input type='checkbox' name='isAgree'   onChange={handleChange}>
            </input>
            <label>agree the terms</label>
            <button>submit</button>
        </form>
      
    </div>
  )
}

export default ExampleFormUs