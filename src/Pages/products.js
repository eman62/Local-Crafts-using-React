import React from 'react';
import image1 from './unnamed.png';
import '../Styles/products.css';

const Products = () => {
  return (
    <div className="container">
      <div className="login-container">
        <div>
          <div>
            تواصل معنا
          </div>
        </div>
        <div className="login-form">
          <div>اضافة منتج أو خدمة</div>
          
          <div>
            <span>النوع:</span>
            <label>
              <input type="radio" name="type" value="service" checked />
              خدمة
            </label>
            <label>
              <input type="radio" name="type" value="product" />
              منتج
            </label>
          </div>
          
          {/* Add صور section */}
          <div className="upload-section">
            <label>صور:</label>
            <div className="icons-container">
              {/* Wrap each icon in a div with a gray background */}
              <div className="icon-wrapper">
                <img src={image1} alt="Icon 1" className="drag-drop-icon" />
              </div>
              <div className="icon-wrapper">
                <img src={image1} alt="Icon 2" className="drag-drop-icon" />
              </div>
               
              {/* Add more icon divs as needed */}
            </div>
          </div>
          
          <div>
            <div>
              <label htmlFor="address">العنوان:</label>
              <input type="text" id="address" placeholder="العنوان" />
            </div>
          </div>
          <div className="dropdowns-container">
            <div>
              <label htmlFor="province">القسم الفرعي</label>
              <select className="dropdown" id="province">
                <option value="" disabled selected>اسم البريد</option>
                {/* Add options for main categories */}
              </select>
            </div>
            <div>
              <label htmlFor="postal">القسم الاساسي</label>
              <select className="dropdown" id="postal">
                <option value="" disabled selected> المحافظه</option>
                {/* Add options for sub-categories */}
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="description">الوصف:</label>
              <input type="text" id="description" placeholder="الوصف" />
            </div>
          </div>
          <div className="buttons-container">
            <input type="submit" value="الغاء" />
            <input type="submit" value="تعديل" />
          </div>
        </div>
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-dGzk1BZ7AzXsytxPi6tPDQGedhQNe-fnxuhUubZEHGmJGV3Mv7ViyEdH~h1mEoLCLZ8bGvOMHOac9P10gmWkZUvNbdtKWNZFPEeVUDFqS~ZRZfxiSZ-Bfn0ETk6BhRY67QaLL7ERh4Tt5XNHQJoa9j6TeSL6C5SuJc79nQ37shNjVlPVaXOzUxa5SY6cvUscKDALerDU7CDku6S5EHwZ1hlb2sUHyC6a71TKY~D00y8~YzvGecVrgd3XjbDRMF1mhq5Tgo~TxSxoDkjuf3ZxQ-wlKLEi1C30bdkPyA9ezOh37aeshkILVrPjvVBKeJKsfNXN5CUsrMZj7KM5BWoQ__" alt="Header" className="header-image" />
    </div>
  );
};

export default Products;



