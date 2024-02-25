import React from 'react';
import '../Styles/navBar.css'; 
import PersonIcon from '@material-ui/icons/Person'; // استيراد الأيقونة من مكتبة Material Icons
import logo from '../Components/c4116a603798eb5034b06c16696f7a8d.png'; // Import the image

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <div className="login-box">
            <PersonIcon />
            <span>تسجيل دخول</span>
          </div>
          <input type="text" placeholder="ابحث" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#about">عن موقعنا</a></li>
          <li><a href="#products">منتجات</a></li>
          <li><a href="#services">خدمات</a></li>
          <li><a href="#home">الرئيسية</a></li>
        </ul>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" /> {/* Use imported logo */}
        </div>
      </nav>
    );
};

export default Navbar; 



