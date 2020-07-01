import React from 'react';
import Card from './Card';

const Home = props => {
  return (
    <div className="container">
      <div className="hero d-flex align-items-center justify-content-between">
        <h1>User Testing made easy.</h1>
        <img data-aos="fade-left" src={props.imgBg} alt="server" className="img-fluid main-image" />
      </div>
      <br />
      <h2 className="d-flex justify-content-center">How it Works</h2>
      <div className="cards d-flex justify-content-between ">
        {props.cards.map(card =>
          <Card card={card} />
        )}
      </div>
    </div>
  )
}

export default Home;