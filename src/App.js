import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Text from './text';

AOS.init();
const imgBg = "https://news.sophos.com/wp-content/uploads/2019/07/shutterstock_571378933-compressor.jpg"
function App() {
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
              <li className="dropdown">{Text.CLOUD_WEB_HOSTING}
                <p className="dropdown-content">
                  {Text.CLOUD_WEB_HOSTING_D}
                </p>
              </li>
              <li className="dropdown">{Text.CLOUD_SERVER}
                <p className="dropdown-content">{Text.CLOUD_SERVER_D}
                </p></li>
              <li className="dropdown">{Text.CLOUD_MAIL}
                <p className="dropdown-content">{Text.CLOUD_MAIL_D}
                </p></li>
              <li className="dropdown">{Text.DOMAIN}
                <p className="dropdown-content">{Text.DOMAIN_D}
                </p></li>
              <li className="dropdown">{Text.COLO}
                <p className="dropdown-content">{Text.COLO_D}
                </p></li>
              <li className="dropdown">{Text.SSL}
                <p className="dropdown-content">{Text.SSL_D}
                </p></li>
              <li className="dropdown">{Text.DED}
                <p className="dropdown-content">{Text.DED_D}
                </p></li>
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
