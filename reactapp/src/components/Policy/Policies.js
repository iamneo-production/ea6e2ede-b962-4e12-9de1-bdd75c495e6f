import React from 'react';
import './Policies.css';
// import './Cards.css';
import CardItem from './CardItem';
import Navbar from '../pages/Navbar';

function Cards() {
  return (
    <div>
      <Navbar/>
    <div className='cards'>
      <h1>Check out these EPIC Policies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/family-3.jpg'
              // src='images/family-2.jpg'
              // src='images/family-4.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Family'
              path='/services'
            />
            <CardItem
              src='images/child-5.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Child'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/senior-1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Senior Citizen'
              path='/services'
            />
            <CardItem
              src='images/preg-3.webp'
              // src='images/preg-1.png'
              // src='images/preg-5.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Maternity'
              path='/products'
            />
            <CardItem
              src='images/parents-2.jpg'
              // src='images/parents-3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Parents'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;