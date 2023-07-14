import React from 'react'
import { useState, useRef, useEffect } from 'react';
import './ImgSlider.css';

function Slider() {
    let[count,setCount] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
          const radioElement = document.getElementById(`radio${count}`);
          if (radioElement) {
            radioElement.checked = true;
            setCount((prevCount) => (prevCount % 4) + 1);
          }
        }, 5000);
    
        return () => clearInterval(interval);
      }, [count]);

  return (
    <div className='main-slider'>
      <div className='slider'>
        <div className='slides'>
            <input type='radio' name='radio-btn' id='radio1'/>
            <input type='radio' name='radio-btn' id='radio2'/>
            <input type='radio' name='radio-btn' id='radio3'/>
            <input type='radio' name='radio-btn' id='radio4'/>

            <div className='slide first'>
                <img src='images/worried.jpg' alt="img"/>
            </div>
            <div className='slide'>
                <img src='images/family-1.jpg' alt="img"/>
            </div>
            <div className='slide'>
                <img src='images/family-3.jpg' alt="img"/>
            </div>
            <div className='slide'>
                <img src='images/family-4.jpg' alt="img"/>
            </div>

            <div className='navigation-auto'>
                <div className='auto-btn1'></div>
                <div className='auto-btn2'></div>
                <div className='auto-btn3'></div>
                <div className='auto-btn4'></div>
            </div>
        </div>

        <div className='navigation-manual'>
            <label for='radio1' className='manual-btn'></label>
            <label for='radio2' className='manual-btn'></label>
            <label for='radio3' className='manual-btn'></label>
            <label for='radio4' className='manual-btn'></label>
        </div>
    </div>
    </div>
  )
}

export default Slider