import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Text from './text';
import HeaderComp from './HeaderComp';
import Home from './Home';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const imgBg = "ui.webp"
AOS.init();
//const imgBg = "https://news.sophos.com/wp-content/uploads/2019/07/shutterstock_571378933-compressor.jpg"
const App = () => {
  const titles = [
    { name: "Features", body: Text.CLOUD_WEB_HOSTING_D, bodyTitle: Text.CLOUD_WEB_HOSTING_T },
    { name: "Pricing", body: Text.CLOUD_SERVER_D, bodyTitle: Text.CLOUD_SERVER_T },
    { name: "Get Paid to Test", body: Text.CLOUD_MAIL_D, bodyTitle: Text.CLOUD_MAIL_T },
    { name: "Blog", body: Text.DOMAIN_D, bodyTitle: Text.DOMAIN_T },
    { name: 'Contact Us', body: '+66 0 2722 9080 +66 8 5807 2443', bodyTitle: 'Phone' }
  ]

  const cards = [
    { name: "Target your audience", li: ["Get the right users using your site"], href: "cloudwebhosting" },
    { name: "Discover", li: ["Browse metrics and insights on user experiences"], href: "cloudserver" },
    { name: "Share", li: ["Build a shared understanding of your experience and share it across your favorite tools"], href: "cloudmail" }
  ]

  return (
    <Router>
      <div className="">
        <header className="navbar d-flex align-items-baseline">
          <div>
            <img src="nineweb_mod.png" className="App-logo" alt="logo" />
          </div>
          <h1>{Text.NINE_WEB}</h1>
          {/* mobile */}
          <div className="tabs-m dropdown">
            <i className="fas fa-bars"></i>
            <div className="dropdown-content">
              <ul class="list-group">
                {titles.map(title =>
                  <li class="list-group-item">{title.name}</li>
                )}

              </ul>
            </div>

          </div>
          <ul className="tabs navbar-nav-scroll flex-grow-1">
            <div className="titles d-flex justify-content-between">
              {titles.map((title) => {
                return <HeaderComp name={title.name} body={title.body} bodyTitle={title.bodyTitle} />
              })}
            </div>
          </ul>
          <span className="free">
            <Button variant="primary" >Try Nineweb for free</Button>
          </span>
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
