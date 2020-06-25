import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Text from './text';
import HeaderComp from './HeaderComp';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const imgBg = "servers_t.png"
AOS.init();
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
    { name: Text.CLOUD_WEB_HOSTING, li: Text.CWH_LI, href: "cloudwebhosting" },
    { name: Text.CLOUD_SERVER, li: Text.CS_LI, href: "cloudserver" },
    { name: Text.CLOUD_MAIL, li: Text.CM_LI, href: "cloudmail" }
  ]

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="d-flex justify-content-between">
            <div className="App-logo">
              <img src="nineweb_mod.png" className="App-logo" alt="logo" />
              <h1>{Text.NINE_WEB}</h1>
            </div>
            <div>
              <span className="dropdown text-center">
                <span className="">contact us </span>
                <span><i class="fas fa-chevron-right"></i></span>
                <div className="dropdown-content">
                  <div className="card">
                    <div className="card-text">
                    <b>phone:</b> +66 0 2722 9080
                    <br></br>
                    <b>mobile:</b> +66 8 5807 2443
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <ul className="tabs navbar-nav-scroll">
            <div className="titles d-flex justify-content-around">
              {titles.map((title) => {
                return <HeaderComp name={title.name} body={title.body} bodyTitle={title.bodyTitle} />
              })}
            </div>
          </ul>
        </header>
        <Switch>
          <Route exact path='/'>
            <Home cards={cards} imgBg={imgBg} />
          </Route>
          <Route path="/about">
            <h1>ABOUT</h1>
          </Route>
        </Switch>
        <footer>
          <div id="footer" className='d-flex justify-content-center'>
            <h3>Contact Us</h3>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
