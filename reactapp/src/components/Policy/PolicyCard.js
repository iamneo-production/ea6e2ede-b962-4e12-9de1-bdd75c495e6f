import React from 'react'
import './PolicyCard.css'

function PolicyCard() {
  const Rest = [
    {
      id: 1,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 2,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 3,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 4,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 5,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 6,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 7,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 8,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 9,
      image: 'images/family-4.jpg',
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
  ];
  return (
    <div>
          {Rest.map((item, index) => {
          return (

            <div id="whole" className='whole'>
              
                <div key={index} id="resta-card">
                  <div>
                  <img src={item.image} id="ss-rest" />
                  </div>
                  <div>
                    <h3 style={{ paddingLeft: "10px" }}>{item.name}</h3>
                    <div id="rating">
                      {/* <AiFillStar id="star" /> */}
                      star
                      <div id="rate">{item.rating}</div>
                    </div>
                    <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
                      <b>Famous:</b> {item.famous}
                    </div>
                    <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
                      <b>Type:</b> {item.type}
                    </div>
                    <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
                      <b>Distance: </b>
                      {item.distance}
                    </div>
                    <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
                      <b>Time: </b>
                      {item.time}
                    </div>
                  </div>

                </div>
              
            </div>

          );
        })}
    </div>
  )
  
}

export default PolicyCard;