import React,{useState} from 'react'
export default function Navbar({getExcuse}) {

  const [inputV,setinputV]= useState('');
  console.log(inputV);
  return (
   <>
      <h1 data-text="GET THE MOST AMAZING EXCUSE FOR YOUR EXCUSE">GET THE MOST AMAZING EXCUSE FOR YOUR EXCUSE</h1>
    <div className="box">
    <select id="cars" name="cars" onChange={(e)=>setinputV(e.target.value)}>
    <option value="">Pick a Category</option>
      <option value="family">Family</option>
      <option value="office">Office</option>
      <option value="children">Children</option>
      <option value="college">College</option>
      <option value="party">Party</option>
    </select>
    </div>
    <button className='button' onClick={()=>getExcuse(inputV)}>Get Excuse</button>
   </>
  )
}
