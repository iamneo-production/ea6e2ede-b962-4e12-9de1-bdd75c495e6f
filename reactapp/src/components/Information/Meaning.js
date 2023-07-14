import React from 'react'
import './Info.css';

function Meaning() {
  return (
    <div className='info'>
        <div className='info-container'>
          <div className='img-container'>
              <img src='images/worried.jpg' alt="img" width='500' height='300'/>
          </div>
          <div className='text-container'>
              <h1>What is health insurance?</h1>
              <p>A health insurance plan covers the cost of hospitalisation and other planned or unplanned medical expenses for you and/or your family. In today's day and age, the cost of hospitalisation for unforeseen medical emergencies as well as for planned medical procedures can be very high. You can safeguard your hard earned money and let a comprehensive health insurance plan take care of the financial burden of hospitalisation and other medical treatment.</p>
          </div>            
        </div>
    </div>
  )
}

export default Meaning;