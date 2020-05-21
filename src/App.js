import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div className="container-fluid px-0">
      <div className="App">
        <header className="App-header">
          <div className="flex-row">
            <div className="App-logo col-md-6">
              <img src="http://www.nineweb.co.th/images/nineweb_logo_blue.png" className="App-logo" alt="logo" />
              <h1>Nine Web</h1>
            </div>
          </div>
          <div className="flex-row">
            <ul className="tabs">
              <li className="dropdown">Cloud Web Hosting
              <p className="dropdown-content">
                  บริการเว็บโฮสติ้งบนระบบคลาวด์
                  จุดเด่นของคลาวด์คือระบบจะย้ายเว็บไปยัง server ที่ทำให้เว็บเร็วที่สุดโดยอัตโนมัติ หรือหาก server
                  มีปัญหา ระบบก็จะย้ายเว็บไปเครื่องอื่นโดยอัตโนมัติ โดยไม่มี down-time หรือหาก load บน server
                  เริ่มมีมากขึ้นก็จะย้ายไป server ที่ load น้อยกว่าโดยอัตโนมัติเช่นกัน
              </p>
              </li>
              <li className="dropdown">Cloud Server (VPS)
              <p className="dropdown-content">TEST
              </p></li>
              <li>Cloud Mail Hosting</li>
              <li>Domain</li>
              <li>Colocation</li>
              <li>SSL</li>
              <li>Dedicated</li>
            </ul>
          </div>
          <img src="https://www.dqindia.com/wp-content/uploads/2017/03/server_room.jpg" className="main-image" />
        </header>
        <div data-aos="fade-in">
          <h2>Cloud Web Hosting</h2>
          <div className="row">
            <ul>
              <li>เว็บไซต์บน Cloud โหลดเร็วกว่า Hosting แบบเดิม ๆ</li>
              <li>0% Down-time จากการซ่อมหรืออัพเกรด Hardware</li>
              <li>เว็บไม่อืดด้วยระบบกระจายโหลดไป server อื่นโดยอัตโนมัติ</li>
              <li>Reboot อัตโนมัติ เมื่อพบว่า OS ไม่ตอบสนอง</li>
              <li>ใช้ Multipath SAN Storage และ SAS HDD</li>
              <li>Redundant Cisco Switch และ Network Path</li>
              <li>.NET 4, PHP 7, ASP 3, MSSQL 2017, MySQL 5</li>
              <li>คืนเงินโดยไม่มีเงื่อนไข เมื่อยกเลิกภายใน 30 วัน</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
