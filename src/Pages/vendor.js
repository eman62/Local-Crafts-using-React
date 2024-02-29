import React from 'react';
import '../Styles/login.css';

const Vendor = () => {
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
          <div>تسجيل الدخول</div>
          <div>
            <input type="text" placeholder="المهنة" />
          </div>
          <div>
            <input type="text" placeholder="رقم التليفون" />
          </div>
          <div>
            <input type="text" placeholder="العنوان" />
          </div>
          <div className="dropdowns-container">
            <select className="dropdown">
              <option value="" disabled selected>الصنيف الفرعي</option>
              {/* Add options for sub-categories */}
            </select>
            <select className="dropdown">
              <option value="" disabled selected>التصنيف الأساسي</option>
              {/* Add options for main categories */}
            </select>
          </div>
          <div>
            <input type="text" placeholder="الوصف" />
          </div>
          <div>
            <input type="submit" value="استكمال" />
          </div>
          
          
        </div>
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-dGzk1BZ7AzXsytxPi6tPDQGedhQNe-fnxuhUubZEHGmJGV3Mv7ViyEdH~h1mEoLCLZ8bGvOMHOac9P10gmWkZUvNbdtKWNZFPEeVUDFqS~ZRZfxiSZ-Bfn0ETk6BhRY67QaLL7ERh4Tt5XNHQJoa9j6TeSL6C5SuJc79nQ37shNjVlPVaXOzUxa5SY6cvUscKDALerDU7CDku6S5EHwZ1hlb2sUHyC6a71TKY~D00y8~YzvGecVrgd3XjbDRMF1mhq5Tgo~TxSxoDkjuf3ZxQ-wlKLEi1C30bdkPyA9ezOh37aeshkILVrPjvVBKeJKsfNXN5CUsrMZj7KM5BWoQ__" alt="Header" className="header-image" />
    </div>
  );
};

export default Vendor;


