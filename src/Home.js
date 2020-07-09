import React from 'react';
import Card from './Card';

const Home = props => {
  return (
    <div className="container">
      <div className="col-sm-12">
        <h1>The first day</h1>
        <p>It all started when I went into college as a CS major</p>
      </div>
      <br />
      <h2 className="d-flex justify-content-center">About Me</h2>
      <div className="cards d-flex justify-content-between ">
        {props.cards.map(card =>
          <Card card={card} />
        )}
      </div>
    </div>
  )
}

export default Home;