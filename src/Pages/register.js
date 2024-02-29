import React, { useState } from 'react';
import '../Styles/register.css';

const Register = () => {
  const [userType, setUserType] = useState(''); // State to store selected user type

  // Function to handle user type selection
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="container">
      <div className="login-container">
        <div>
          <div>
            نحن نتيح لك فرصة سريعة وسهلة لكل ما يحتاج إليه منزلك
          </div>
          <div>
            <img src="https://s3-alpha-sig.figma.com/img/58fa/77b1/c4116a603798eb5034b06c16696f7a8d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izNvOJ6N5sREq3uJ1wxHkwYOIsPud0PEjHdmCqA8LoIOYcEKfSpj3XIla1qSKMxCBH03VSsZ2eDJwKG9ngfUESp78eXT7ubvu1BLsoXhkUqMc~7x2s~IIft8Z9hD2jc0KELpbMicepfJCKYny07nQjfZ20L6b02QXqipx7suK6sHi9QV3DDtmRfJqH6Pys-ERDLvTmbsk9elD0kATYAGVHlWsNcDcE8Fi1cGUE6AEpZhkWNtGFJuHirwbkq9N9zjc7fhVyrmgzJ9BZoI9rxLND5vyOadgxzUE61EFWQedeETLMFMNv1QaAnwieEGjW6ChmwvSRc31oucjsGW8-Hfrg__" alt="Logo" />
          </div>
        </div>
        <div className="login-form">
          <div>انشاء حساب جديد</div>
          <div>
            <input type="text" placeholder="الاسم" />
          </div>
          <div>
            <input type="text" placeholder="البريد" />
          </div>
          <div>
            <input type="password" placeholder="كلمة السر" />
          </div>
          <div>
            <input type="password" placeholder="تاكيد كلمه السر"/>
          </div>
          {/* User type selection dropdown */}
          <div>
            <select value={userType} onChange={handleUserTypeChange}>
              <option value="">نوع الحساب</option>
              <option value="buyer">مشتري</option>
              <option value="seller">بائع</option>
            </select>
          </div>
          <div>
            <input type="submit" value="انشاء حساب" />
          </div>
          <div className="no-account-create">
            <div className="no-account">لديك بالفعل حساب</div>
            <div className="create-account">سجل دخول</div>
          </div>
          <div className="google-login">
            <button className="google-login-button">
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.7998 14.6437H30.6251V14.5832H17.5001V20.4165H25.7419C24.5395 23.8122 21.3085 26.2498 17.5001 26.2498C12.6679 26.2498 8.75008 22.332 8.75008 17.4998C8.75008 12.6676 12.6679 8.74984 17.5001 8.74984C19.7306 8.74984 21.7599 9.59129 23.305 10.9658L27.4299 6.84088C24.8253 4.41348 21.3413 2.9165 17.5001 2.9165C9.44643 2.9165 2.91675 9.44619 2.91675 17.4998C2.91675 25.5535 9.44643 32.0832 17.5001 32.0832C25.5537 32.0832 32.0834 25.5535 32.0834 17.4998C32.0834 16.522 31.9828 15.5675 31.7998 14.6437Z" fill="#FFC107"/>
                <path d="M4.59814 10.712L9.3895 14.2259C10.686 11.0161 13.8257 8.74984 17.5 8.74984C19.7305 8.74984 21.7598 9.59129 23.3049 10.9658L27.4298 6.84088C24.8252 4.41348 21.3413 2.9165 17.5 2.9165C11.8986 2.9165 7.04085 6.0789 4.59814 10.712Z" fill="#FF3D00"/>
                <path d="M17.4999 32.0833C21.2668 32.0833 24.6895 30.6418 27.2773 28.2975L22.7638 24.4781C21.2996 25.5872 19.4796 26.25 17.4999 26.25C13.7068 26.25 10.486 23.8314 9.27271 20.4561L4.51709 24.1201C6.93063 28.8429 11.8321 32.0833 17.4999 32.0833Z" fill="#4CAF50"/>
                <path d="M31.7997 14.644H30.625V14.5835H17.5V20.4168H25.7418C25.1643 22.048 24.115 23.4545 22.7617 24.479C22.7624 24.4783 22.7631 24.4783 22.7639 24.4776L27.2774 28.2969C26.958 28.5871 32.0833 24.7918 32.0833 17.5002C32.0833 16.5224 31.9827 15.5679 31.7997 14.644Z" fill="#1976D2"/>
              </svg>
              <span>تسجيل الدخول بواسطة جوجل</span>
            </button>
          </div>
        </div>
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-dGzk1BZ7AzXsytxPi6tPDQGedhQNe-fnxuhUubZEHGmJGV3Mv7ViyEdH~h1mEoLCLZ8bGvOMHOac9P10gmWkZUvNbdtKWNZFPEeVUDFqS~ZRZfxiSZ-Bfn0ETk6BhRY67QaLL7ERh4Tt5XNHQJoa9j6TeSL6C5SuJc79nQ37shNjVlPVaXOzUxa5SY6cvUscKDALerDU7CDku6S5EHwZ1hlb2sUHyC6a71TKY~D00y8~YzvGecVrgd3XjbDRMF1mhq5Tgo~TxSxoDkjuf3ZxQ-wlKLEi1C30bdkPyA9ezOh37aeshkILVrPjvVBKeJKsfNXN5CUsrMZj7KM5BWoQ__" alt="Header" className="header-image" />
    </div>
  );
};

export default Register;
