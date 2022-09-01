import React from 'react'
import {Link} from 'react-router-dom'
const Excusepage = ({excuse,isLoading}) => {
    const preloader = document.querySelector('.preloader');
    const a = document.querySelector('a');
    const like =()=>{
      a.classList.toggle('active')
    }
    window.addEventListener('load', function(){
     preloader.classList.add('complete')
    }
    )
    console.log(excuse);
  return (
    <>
    {isLoading? 
    <div className="preloader">
  <div className="container">
        <span style={{"--i":"1"}}></span>
        <span style={{"--i":"2"}}></span>
        <span style={{"--i":"3"}}></span>
        <span style={{"--i":"4"}}></span>
        <span style={{"--i":"5"}}></span>
        <span style={{"--i":"6"}}></span>
    </div>
  </div> 
  :
  excuse.map((excused,index)=>(
  <div>
    <Link to='/' className='back'>Home</Link>
     <div key={index} className="card">
            <div className='card-header'>{excused.category}</div>
            <div className="card-body">
            <h4>{excused.excuse}</h4>
            </div>
            <div className="card-footer">
            <Link to="" className='a' onClick={()=>like()}>Like</Link>
            </div>
        </div>
  </div>
    ))}
    </>
  )
}

export default Excusepage