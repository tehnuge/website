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
    { name: Text.CLOUD_MAIL, body: Text.CLOUD_MAIL_D, bodyTitle: Text.CLOUD_MAIL_T },
    { name: Text.DOMAIN, body: Text.DOMAIN_D, bodyTitle: Text.DOMAIN_T },
    { name: Text.COLO, body: Text.COLO_D, bodyTitle: Text.COLO_T },
    { name: Text.SSL, body: Text.SSL_D, bodyTitle: Text.SSL_T },
    { name: Text.DED, body: Text.DED_D, bodyTitle: Text.DED_T },
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
          <div className="d-flex justify-content-between">
            <div className="App-logo">
              <img src="nineweb_mod.png" className="App-logo" alt="logo" />
              <h1>{Text.NINE_WEB}</h1>
            </div>
            <div><h2>contact us</h2></div>
          </div>
          <ul className="tabs">
            <div className="titles d-flex justify-content-around">
              {titles.map((title) => {
                return <HeaderComp name={title.name} body={title.body} bodyTitle={title.bodyTitle} />
              })}
            </div>
          </ul>
        </header>
        <div className="body">
          <div className="d-flex align-items-center justify-content-start">
            <img data-aos="fade-left" src={imgBg} className="img-fluid main-image" />
            <h2>Leader in Servers</h2>
          </div>
          <div className="d-flex justify-content-between">
            {cards.map(card => {
              return <div>
                <Card name={card.name} li={card.li} />
              </div>
            })}
          </div>
        </div>
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
