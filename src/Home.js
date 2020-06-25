import React from 'react';
import Card from './Card';

const Home = props => {
  return (
    <div className="body">
    <div className="d-flex align-items-center justify-content-start">
      <img data-aos="fade-left" src={props.imgBg} alt="server" className="img-fluid main-image" />
      <h2>Leader in Cloud Web Hosting</h2>
    </div>
    <div className="d-flex justify-content-between">
      {props.cards.map(card => {
        return (
          <Card name={card.name} li={card.li} />
        )
      })}
    </div>
  </div>
  )
}

export default Home;