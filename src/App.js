import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Text from './text';
import HeaderComp from './HeaderComp'

AOS.init();
const imgBg = "https://news.sophos.com/wp-content/uploads/2019/07/shutterstock_571378933-compressor.jpg"
function App() {
  let titles = [
    {name: Text.CLOUD_WEB_HOSTING, body: Text.CLOUD_WEB_HOSTING_D},
    {name: Text.CLOUD_SERVER, body: Text.CLOUD_SERVER_D},
    {name: Text.CLOUD_MAIL, body: Text.CLOUD_MAIL_D},
    {name: Text.DOMAIN, body: Text.DOMAIN_D},
    {name: Text.COLO, body: Text.COLO_D},
    {name: Text.SSL, body: Text.SSL_D},
    {name: Text.DED, body: Text.DED_D},
  ]

  return (
    <div className="d-flex justify-content-center">
      <div className="App">
        <header className="App-header">
          <div className="flex-row">
            <div className="App-logo col-md-6">
              <img src="nineweb_mod.png" className="App-logo" alt="logo" />
              <h1>{Text.NINE_WEB}</h1>
            </div>
          </div>
          <div className="flex-row">
            <ul className="tabs">
              {titles.map((title) => {                
                return <HeaderComp name={title.name} body={title.body} />
              })}
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <img data-aos="fade-left" src={imgBg} className="img-fluid main-image" />
          </div>
        </header>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{Text.CLOUD_WEB_HOSTING}</h2>
                <div className="card-text">
                  <ul>
                    {Text.CWH_LI.map(val => {
                      return <li>{val}</li>
                    })}
                  </ul>
                </div>
                <a href="#" class="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{Text.CLOUD_SERVER}</h2>
                <div className="card-text">
                  <ul>
                    {Text.CWH_LI.map(val => {
                      return <li>{val}</li>
                    })}
                  </ul>
                </div>
                <a href="#" class="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{Text.CLOUD_MAIL}</h2>
                <div className="card-text">
                  <ul>
                    {Text.CM_LI.map(val => {
                      return <li>{val}</li>
                    })}
                  </ul>
                </div>
                <a href="#" class="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
