<<<<<<< HEAD
import React from 'react';
import '../Styles/navBar.css'; 
 import PersonIcon from '@material-ui/icons/Person'; // استيراد الأيقونة من مكتبة Material Icons


const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <div className="login-box">
             <PersonIcon /> 
            <span>تسجيل دخول</span>
          </div>
          <input type="text" placeholder="ابحث" />
=======
import React from "react";
import "../Styles/navBar.css";
import PersonIcon from "@mui/icons-material/Person";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="login-box">
          <PersonIcon />
          <span>تسجيل دخول</span>
>>>>>>> 1911c99adb31cc22392a40abd2c1c2bffb5fa167
        </div>
        <input type="text" placeholder="ابحث" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#about">عن موقعنا</a>
        </li>
        <li>
          <a href="#products">منتجات</a>
        </li>
        <li>
          <a href="#services">خدمات</a>
        </li>
        <li>
          <a href="#home">الرئيسية</a>
        </li>
      </ul>
      <div className="navbar-logo">
        <img
          src="https://s3-alpha-sig.figma.com/img/58fa/77b1/c4116a603798eb5034b06c16696f7a8d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izNvOJ6N5sREq3uJ1wxHkwYOIsPud0PEjHdmCqA8LoIOYcEKfSpj3XIla1qSKMxCBH03VSsZ2eDJwKG9ngfUESp78eXT7ubvu1BLsoXhkUqMc~7x2s~IIft8Z9hD2jc0KELpbMicepfJCKYny07nQjfZ20L6b02QXqipx7suK6sHi9QV3DDtmRfJqH6Pys-ERDLvTmbsk9elD0kATYAGVHlWsNcDcE8Fi1cGUE6AEpZhkWNtGFJuHirwbkq9N9zjc7fhVyrmgzJ9BZoI9rxLND5vyOadgxzUE61EFWQedeETLMFMNv1QaAnwieEGjW6ChmwvSRc31oucjsGW8-Hfrg__"
          alt="Logo"
        />{" "}
        {/* Use imported logo */}
      </div>
    </nav>
  );
};

export default Navbar;
