import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Text from './text';
import HeaderComp from './HeaderComp'
import Card from './Card'

AOS.init();
const imgBg = "servers_t.png"
//const imgBg = "https://news.sophos.com/wp-content/uploads/2019/07/shutterstock_571378933-compressor.jpg"
const App = () => {
  const titles = [
    { name: Text.CLOUD_WEB_HOSTING, body: Text.CLOUD_WEB_HOSTING_D, bodyTitle: Text.CLOUD_WEB_HOSTING_T },
    { name: Text.CLOUD_SERVER, body: Text.CLOUD_SERVER_D, bodyTitle: Text.CLOUD_SERVER_T },
    { name: Text.CLOUD_MAIL, body: Text.CLOUD_MAIL_D },
    { name: Text.DOMAIN, body: Text.DOMAIN_D },
    { name: Text.COLO, body: Text.COLO_D },
    { name: Text.SSL, body: Text.SSL_D },
    { name: Text.DED, body: Text.DED_D },
  ]

  const cards = [
    { name: Text.CLOUD_WEB_HOSTING, li: Text.CWH_LI },
    { name: Text.CLOUD_SERVER, li: Text.CS_LI },
    { name: Text.CLOUD_MAIL, li: Text.CM_LI }
  ]

  return (
    <div className="d-flex justify-content-center">
      <div className="App">
        <header className="App-header">
          <div className="flex-row">
            <div className="App-logo col-sm-6">
              <img src="nineweb_mod.png" className="App-logo" alt="logo" />
              <h1>{Text.NINE_WEB}</h1>
            </div>
            <div className="col-sm-6"></div>
          </div>
          <div className="flex-row">
            <ul className="tabs">
              {titles.map((title) => {
                return <HeaderComp name={title.name} body={title.body} bodyTitle={title.bodyTitle} />
              })}
            </ul>
          </div>
        </header>
        <div className="flex-row">
          <div className="d-flex align-items-center justify-content-start">
            <img data-aos="fade-left" src={imgBg} className="img-fluid main-image" />
            <h2>Leader in Servers</h2>
          </div>
        </div>
        <div className="row">
          {cards.map(card => {
            return <div className="col-sm-4">
              <Card name={card.name} li={card.li} />
            </div>
          })}
        </div>
        <br></br>
        <footer>
          <div id="footer" className='d-flex justify-content-center'>
            <h3>Contact Us</h3>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
