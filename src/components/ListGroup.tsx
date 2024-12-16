// import React, { useState }from "react";
import "tailwindcss/tailwind.css";
import "./ListGroup.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';


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
          <button className="request-demo" >Request a Demo</button>
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
              src="https://s3-alpha-sig.figma.com/img/fc9a/549c/c0779c0f1b5e8083966ddafe7c4acaaa?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a1-TJ-l6qw4F3bXxS3uaQMlRvHn1xsysTyKyojS8n4JBK4ksSRyjk714gLgivffUGwBTZQ5qPzc~-rbyjyQeR0PmSxuSQl2ZVSGzadKlW7DjOWG4te~zEsp0I~t35a7pHQEiLBhcXfE21Hp7CsDXr7jyXT-6Z4N0ivYbFd66AreNtkpV3qqL5ln~KMKZ~hnNUai63da2l39oVXuIQsi-VJjUid1XraQEkWXBPIvb4sXGljfm0lT5JLaLqEHVTZI7lsFHl-FzAJ~iffHR7mlly7KV4log0r2Dysben26yNnu1Qok1IjcznDPcNupVRsvuJ8NPEC4lqdGMn4jnKDjwWg__"
              alt="screen1"
            />
            <img
              className="phone2"
              src="https://www.figma.com/file/IaqJyyqBFB3g1gvO6JhBK1/image/2b06ae15023c13a737e2a45daed45370e7a4e3bb"
              alt="screen2"
            />
          </div>
        </div>
      </div>

      {/* Mobile attendance */}
      <div className="mobile-attendance">
        <div>
          <div className="rectangle"></div>
          <img
            className="phone3"
            src="https://s3-alpha-sig.figma.com/img/fc9a/549c/c0779c0f1b5e8083966ddafe7c4acaaa?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a1-TJ-l6qw4F3bXxS3uaQMlRvHn1xsysTyKyojS8n4JBK4ksSRyjk714gLgivffUGwBTZQ5qPzc~-rbyjyQeR0PmSxuSQl2ZVSGzadKlW7DjOWG4te~zEsp0I~t35a7pHQEiLBhcXfE21Hp7CsDXr7jyXT-6Z4N0ivYbFd66AreNtkpV3qqL5ln~KMKZ~hnNUai63da2l39oVXuIQsi-VJjUid1XraQEkWXBPIvb4sXGljfm0lT5JLaLqEHVTZI7lsFHl-FzAJ~iffHR7mlly7KV4log0r2Dysben26yNnu1Qok1IjcznDPcNupVRsvuJ8NPEC4lqdGMn4jnKDjwWg__"
            alt="screen1"
          />
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
          <div className="laundry-img">
            <img
              className="laundry1"
              src="https://tools.corenexis.com/image/cnxm/M24/12/993105e9dc.webp"
              alt="laundry1"
            />
            <img
              className="laundry2"
              src="https://tools.corenexis.com/image/cnxm/M24/12/c2b491fbab.webp"
              alt="laundry2"
            />
            <img
              className="scanning"
              src="https://s3-alpha-sig.figma.com/img/daee/7b24/6e7d02182ec2b72e85ec1031159397e7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZYodopHxS-2OAEwH4RwFsgx2M1OesPyBHIE2lM5Pt0oiQs~Bw7jSSO9WR9TLZa8PFSS7iHL-7RF2jMzdQSQ2v7PRr0wi63p88OAg~R4UBDa8absTBGv8kRxk6h9OjXH8bp3tLLbTBOFEnSyvFx-FXHwsb5jvlJLz9rrHAWMJHbt-Hpxq5nZ66pm~JsmSW0Z3o4T8HKBlbr5~tjAXw-Q0t00oJ-E0sB9oLDG2pWIZXXxuZ6e6J8dnYmHrfxsVH34AW2bnVIVDSYUYBSeVcCiFCzXYyTN2vlxOSxOkv2g7ORb2X1ehTAa1REgogoBHCqxR0JW2DVLI2IwV5JUfv7nCvw__"
              alt="scanning"
            />
          </div>
        </div>

        <div className="smart-laundry-image">
          <img
            className="phone4"
            src="https://www.figma.com/file/IaqJyyqBFB3g1gvO6JhBK1/image/2b06ae15023c13a737e2a45daed45370e7a4e3bb"
            alt="phone4"
          />
        </div>
      </div>

      {/* {Face recognition} */}
      <div className="face-recognition-container">
        <div className="images-section">
          <img
            className="face-img"
            src="https://s3-alpha-sig.figma.com/img/9fc0/b67f/6244c26289947b89aa14a4a68a293aea?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wpk4fyCQpCuS1trr5tmp2oIXv2UEiFSv0Rr7npvN02iFsxwtZpWrZdgnrlAKxCqZ4sFbEmVwUiNjTgNZ7uNdMS6AP~mXV-vBxUpia7B-krWHOEVTE20pn~KbEtz2pvOZVInoyUuooMJRehdyDMWdea55X3~YnlCxZuNs1QwLRe7iX5N36JzG-u9EryWj6Y1~S3C6DN-9nPnOpGJRS05kpN-sYzpu3BB1idpnLfWKbwu4XvBOTW~3wMh5~HtNVyyInvPZW0gmv6qoXIqxMFrFYdoQQ0lgzG6AZ9s4kpXzFf-wucNaCnkQcpSo-1c7e8bmlp5E3FAsjWW26mZzwV14XQ__"
            alt="pic1"
          />
          <img
            className="face-img"
            src="https://www.figma.com/file/IaqJyyqBFB3g1gvO6JhBK1/image/ce1542f5e776f2f00dd9e7c3eca8ee17b4047185"
            alt="pic2"
          />
        </div>
        <div className="text-section">
          <h1>
            <span className="highlight">Face Recognition and</span>
            <br />
            Attendance <span className="system">System</span>
          </h1>
          <p>
            Enhance workplace security and efficiency with real-time face
            recognition seamlessly integrated into CCTV systems. Automatically
            detect and record attendance with cutting-edge technology.
          </p>
        </div>
      </div>
      {/* {why intech} */}
      <section className="why-intech">
        <div className="title-intech">
          <h1>
            Why <span className="in">IN</span>
            <span className="tech">TECH?</span>
          </h1>
        </div>
        <div className="description-intech">
          <p>At InTech, we deliver solutions that prioritize:</p>
          <ul>
            <li>
              <span className="icon">⚙️</span>
              <strong>Efficiency:</strong> Streamline operations and save time
              with smart technology.
            </li>
            <li>
              <span className="icon">🛡️</span>
              <strong>Security:</strong> Safeguard your workplace with advanced,
              reliable systems.
            </li>
            <li>
              <span className="icon">💡</span>
              <strong>Innovation:</strong> Stay ahead with cutting-edge
              solutions designed for the future.
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="logo">
          <img
            className="logo2"
            src="http://192.168.0.77:8000/_nuxt/intech_logo-clear.BqQbyHg-.png"
            alt="Intech Logo"
          />
            <span className="logo-text">IN</span>
            <span className="logo-highlight">TECH</span>
          </h1>
          <p className="footer-description">
            Be the leading provider of cutting-edge smart technology, creating smarter, 
            more efficient, and secure work environments for businesses of all sizes.
          </p>
          <ul className="footer-menu">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-right">
          <div className="contact-box">
            <h3>Contact us through Phone Number</h3>
            <div className="phone-container">
              <span>+885 12 345 678</span>
              <button className="call-now">Call now</button>
            </div>
            <p className="address">
              <strong>Address:</strong> Green Arcade 1, 2 And 3, Thmey Village, Chambok Commune, 
              Phnom Srouch District, Kampong Speu Province, Cambodia
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default ListGroup;
