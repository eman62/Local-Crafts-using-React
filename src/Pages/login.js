import React from 'react';

const Login = () => {
  return (
    <div style={{ backgroundColor: 'blue', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        نحن نتيح لك فرصة سريعة وسهلة لكل ما يحتاج إليه منزلك
      </div>
      <div style={{ textAlign: 'right' }}>
        <div>تسجيل الدخول</div>
        <div>
          <input type="text" placeholder="البريد" />
        </div>
        <div>
          <input type="password" placeholder="كلمة السر" />
        </div>
        <div>
          <input type="submit" value="تسجيل الدخول" />
        </div>
      </div>
    </div>
  );
};

export default Login;


