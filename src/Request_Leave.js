import React from "react";
import './style.css'
import {Link} from "react-router-dom"

const Form = () => {
    return (
      <div className='blogContainer'>
          <form className='formBox'>
              <h1 style={{textAlign:"center", color:"white"}}>Request Leave</h1>
              <Link to = "/">Home</Link><br></br>
              <Link to = "/dashboard">Dashboard</Link><br></br>
              <section className='everythingInBox'>
                  <div className='ThreeBoxes'>
                      <div>
                          <input className='STARTdate' type="text" placeholder='Start of leave (DD/MM/YY)' />
                      </div>
                      <div>
                          <input className='ENDdate' type="text" placeholder='End of leave (DD/MM/YY)' />
                      </div>
                      <div>
                          <input className='REASON' type="text" placeholder='State reason for leave' />
                      </div>
                  </div>
                  <div className='bothBtns'>
                      <button className='sendBtn' style={{color:"white"}} type="send" value="POST">SEND</button>
                      <button className='cancelBtn' style={{color:"white"}} type="reset">CANCEL</button>
                  </div>
              </section>
          </form>
      </div>
    )
  }
  
  export default Form
