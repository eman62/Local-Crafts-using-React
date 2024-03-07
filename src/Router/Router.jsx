import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";


export default function RouterPages() {
  const LoginPage = React.lazy(() => import("../Pages/loginPage"));
  const HomePage = React.lazy(() => import("../Pages/homePage"));
  const ProductsPage = React.lazy(() => import("../Pages/productsPage"));
  const UserRegister = React.lazy(() => import("../Pages/userRegister"));
  const NotFound = React.lazy(() => import("../Pages/NotFoundPage/NotFound"));
  const VendorRegister = React.lazy(() => import("./../Pages/vendorRegister"));
  const ServicesPage = React.lazy(() => import("../Pages/ServicesPage"));
  return (
    <Suspense>
      <Routes>
        <Route path="/user-login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-register/products" element={<ProductsPage />} />
        <Route path="/user-register/services" element={<ServicesPage />} />
        <Route path="/vedorRegister" element={<VendorRegister />} />
        <Route
          path="/user-register/vedorRegister"
          element={<VendorRegister />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
