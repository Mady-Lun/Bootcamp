import React from "react";
import "tailwindcss/tailwind.css";
import "./ListGroup.css";

function ListGroup() {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="list-group">
          <img
            className="logo"
            src="http://192.168.0.77:8000/_nuxt/intech_logo-clear.BqQbyHg-.png"
            alt="Intech Logo"
          />
          <h1 className="title">
            <span className="in">IN</span>
            <span className="tech">TECH</span>
          </h1>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <button className="request-demo">Request a Demo</button>
        </nav>
      </header>

      {/* Main Content Section */}
      <div className="body">
        <div className="main-body">
          <div className="sg">
            <h1 className="SW">Smarter Workplaces,</h1>
            <h1 className="SS">Secure Solutions.</h1>
            <p>
              Revolutionize workplace efficiency and security through innovative
              smart technology solutions.
            </p>
          </div>
          <div className="image">
            <img
              className="phone1"
              src="https://bit.ly/3Bf2iHn"
              alt="screen1"
            />
            <img className="phone2" src="http://bit.ly/3DaJVnn" alt="screen2" />
          </div>
        </div>
      </div>

      {/* Mobile attendance */}
      <div className="mobile-attendance">
        <div>
          <div className="rectangle"></div>
          <img className="phone3" src="https://bit.ly/3Bf2iHn" alt="screen1" />
        </div>

        <div className="attendance-cards">
          <div className="attendance-card1">
            <div className="icon-section">
              <img
                src="https://icons.iconarchive.com/icons/pictogrammers/material/128/import-icon.png"
                alt="Check In Icon"
              />
            </div>
            <div className="text-section">
              <h3>Clock In</h3>
              <p className="time">09:00 am</p>
              <p className="status">On Time</p>
            </div>
          </div>
          <div className="attendance-card2">
            <div className="icon-section">
              <img
                src="https://icons.iconarchive.com/icons/pictogrammers/material/128/export-icon.png"
                alt="Check In Icon"
              />
            </div>
            <div className="text-section">
              <h3>Clock Out</h3>
              <p className="time">05:00 pm</p>
              <p className="status">Go Home</p>
            </div>
          </div>
        </div>
        <div className="attendance-text">
          <div className="text-container">
            <div className="title-section">Mobile Attendance</div>

            <div className="description">
              <p>
                Effortlessly track employee attendance with our seamless
                clock-in/out feature and real-time monitoring. Stay updated with
                accurate records, ensuring efficiency and reliability for your
                workforce.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Laundry */}
      <div className="smart-laundry">
        <div className="text-container">
          <div className="title-section">Smart Laundry</div>

          <div className="description">
            <p>
              Simplify your laundry routine with QR code activation and
              automated weekly system refresh. Enjoy a hassle-free and efficient
              experience tailored to modern living.
            </p>
          </div>
        </div>

        <div className="smart-laundry-image">
          
          <img className="phone4" src="http://bit.ly/3DaJVnn" alt="phone4" />
        </div>
      </div>
    </>
  );
}

export default ListGroup;
