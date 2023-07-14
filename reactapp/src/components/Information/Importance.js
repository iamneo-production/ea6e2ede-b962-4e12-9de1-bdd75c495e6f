import React from 'react'
import './Info.css';

function Importance() {
  return (
    <div className='info'>
        <div className='info-container'>
          <div className='img-container'>
              <img src='images/worried.jpg' alt="img" width='500' height='300'/>
          </div>
          <div className='text-container'>
              <h1>Why should you buy a health insurance policy?</h1>
              <p>While you can plan for certain expenses in your life, for instance, purchasing a home, a car, or a holiday abroad, you can’t really plan for the expenses that might tag along with a medical emergency. You can, however, be prepared for a medical emergency or even for planned medical treatment without dipping into a huge chunk of your savings. This is possible with a comprehensive health insurance plan.</p>
              <p>In a time when the Coronavirus is causing huge losses to a lot of people, both emotionally and financially, it is best to stay prepared for any medical expenses with a robust health insurance plan. While a health plan cannot make up for the emotional turmoil of being hospitalised or watching a loved one undergo hospitalisation, it can help reduce your stress by taking care of the financial burden on your shoulders.</p>
          </div>            
        </div>
    </div>
  )
}

export default Importance;