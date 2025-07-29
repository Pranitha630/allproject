import React, { useState } from 'react'
import { useNavigate } from "react-router";

function FormUseSt() {
  const [form,SetForm]=useState()

  function textHAndle(e){
    SetForm({...form,[e.target.name]:e.target.value})
  }
let nav=useNavigate()
  function nextPage(e) {
    e.preventDefault()
    nav('/welcome',{state:form})
  }
  return (
    <div>
      
      <form style={{display:'flex',flexDirection:'column'}} onSubmit={nextPage}>
        <input type='text'placeholder='FirstName' onChange={textHAndle}  name='FirstName' style={{marginTop:'20px',height:'40px',width:'250px'}}></input>
       
       
         <input type='text' placeholder='mail id' onChange={textHAndle} name='mail id' style={{marginTop:'20px',height:'40px',width:'250px'}}></input>
            <input type='text' placeholder='Password'  name='Password' style={{marginTop:'20px',height:'40px',width:'250px'}}></input>
           
            <label>male</label>
            <input type='radio' name='gender' onChange={textHAndle} value="male"/>
               <label>femalee</label>
            <input type='radio' name='gender' onChange={textHAndle} value="female" ></input>
          
            <input type='checkbox' name='isAgree' onChange={textHAndle}  >
            </input>
            <label >agree the terms</label>
            <button style={{height:'40px',width:'250px'}}>submit</button>


      </form>
    </div>
  )
}

export default FormUseSt
