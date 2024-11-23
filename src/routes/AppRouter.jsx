import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CheckoutLayout from "@layouts/CheckoutLayout";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Cart from "@pages/Cart";
import Checkout from "@pages/Checkout";
import Home from "@pages/Home";
import Product from "@pages/Product";
import ProductsList from "@pages/ProductsList";
import ThankYou from "@pages/ThankYou";
import Error from "@/pages/Error";
import PaymentFailed from "@/pages/PaymentFailed";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products-list/:categoryName",
          element: <ProductsList />,
        },
        {
          path: "products-list",
          element: <ProductsList />,
        },
        {
          path: "products-list/product",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "checkout",
      element: <CheckoutLayout />,
      children: [
        {
          index: true,
          element: <Checkout />,
        },
        {
          path: "thank-you",
          element: <ThankYou />,
        },
        {
          path: "payment-failed",
          element: <PaymentFailed />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const AppRouter = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};
export default AppRouter;
