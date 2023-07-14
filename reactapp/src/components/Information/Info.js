import React from 'react'
import './Info.css';

function Info() {
  return (
    <div className='info'>
        <div className='info-container'>
          <div className='img-container'>
              <img src='images/worried.jpg' alt="img" width='500' height='300'/>
          </div>
          <div className='text-container'>
              <h1>Worried about the hospital bills? Leave it to us.</h1>
              <h2>An unexpected health emergency is stressful enough. Do you really need the additional burden of hospital bills?</h2>
              <p>Your health is your most important asset and you must do everything in your power to protect it. A well rounded health insurance plan can cover the cost of hospitalisation so that you only have to focus on getting better or helping your loved ones get better.</p>
          </div>            
        </div>
    </div>
  )
}

export default Info;