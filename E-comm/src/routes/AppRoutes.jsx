import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layout/AuthLayout";
import PublicProtected from "./protected/PublicProtected";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../app/layout/MainLayout";
import Homepage from "../app/shared/ui/pages/Homepage";
import ProductsPage from "../features/products/ui/pages/ProductsPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import { hydrateUser } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/auth/state/authSlice";
import { hydrateUserAction } from "../features/auth/state/authAction";
import AboutPage from "../app/shared/ui/pages/AboutPage";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      try {
        dispatch(hydrateUserAction())
      } catch (error) {
        console.log("error in hydration..", error);
        dispatch(removeUser());
      }
    })();
  }, [dispatch]);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Homepage />,
            },
            {
              path: "product",
              element: <ProductsPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "orders",
              element: <OrderPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
