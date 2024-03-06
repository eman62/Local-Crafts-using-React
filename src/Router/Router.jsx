import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import VendorRegister from "../Pages/vendorRegister";

export default function RouterPages() {
  const LoginPage = React.lazy(() => import("../Pages/loginPage"));
  const HomePage = React.lazy(() => import("../Pages/homePage"));
  const ProductsPage = React.lazy(() => import("../Pages/productsPage"));
  const UserRegister = React.lazy(() => import("../Pages/userRegister"));
  const VendorRegister = React.lazy(() => import("./../Pages/vendorRegister"));
  const NotFound = React.lazy(() => import("../Pages/NotFoundPage/NotFound"));

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/user-register/vedorRegister"
          element={<VendorRegister />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
