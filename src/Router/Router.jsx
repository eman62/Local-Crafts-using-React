import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ProductsDetalis } from "../Pages/productDetails";
import { ServicesDetalis } from "../Pages/ServicesDetails";

export default function RouterPages() {
  const LoginPage = React.lazy(() => import("../Pages/loginPage"));
  const HomePage = React.lazy(() => import("../Pages/homePage"));
  const ProductsPage = React.lazy(() => import("../Pages/productsPage"));
  const UserRegister = React.lazy(() => import("../Pages/userRegister"));
  const NotFound = React.lazy(() => import("../Pages/NotFoundPage/NotFound"));
  const VendorRegister = React.lazy(() => import("./../Pages/vendorRegister"));
  const ServicesPage = React.lazy(() => import("../Pages/ServicesPage"));
  const VendorOrdersPage = React.lazy(() => import("../Pages/venorOrdersPage"));
  const AddProducts = React.lazy(() => import("../Pages/addProducts"));
  const VendorProfile = React.lazy(() => import("../Pages/vendorProfile"));
  const Orders = React.lazy(() => import("../Pages/orders"));
  const UserViewVendor = React.lazy(() => import("./../Pages/userViewVendor"));
  const VendorEditProfilePage = React.lazy(() =>
    import("../Pages/vendoEditProfile")
  );
  // const ProductDetiles = React.lazy(() => import("../Pages/productDetails"));

  return (
    <Suspense>
      <Routes>
        <Route path="/user-login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/vedorRegister" element={<VendorRegister />} />
        <Route path="/vendorOrders" element={<VendorOrdersPage />} />
        <Route path="/vendorProfile" element={<VendorProfile />} />
        <Route path="/userOrders" element={<Orders />} />
        <Route path="/vendorEditProfile" element={<VendorEditProfilePage />} />
        <Route path="/userViewVendor/:vendorId" element={<UserViewVendor />} />

        <Route
          path="/servicesdetails/:serviceId"
          element={<ServicesDetalis />}
        />
        <Route
          path="/productDetails/:productId"
          element={<ProductsDetalis />}
        />
        <Route
          path="/productDetails/:productId"
          element={<ProductsDetalis />}
        />
        <Route path="/addService" element={<AddProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
