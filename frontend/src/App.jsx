import LoginIn from "./page/Login";
import Singup from "./page/Singup";
import Navbar from "./Componenet/Navbar";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PAGEnotFound from "./page/PageNotFount";
import Footer from "./page/Footer";
import { Toaster } from "react-hot-toast";
import Layout from "./ui/Layout";
import Menus from "./Componenet/Menus";
import Cart from "./Feature/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Order from "./page/CreateOrder";

import GetOrder from "./page/GetOrder";
import GetNewOrder from "./page/GetNewOrder";
import LououtOrder from "./ui/LououtOrder";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="  w-full h-screen mx-auto ">
          <Navbar />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/menu" element={<Menus />} />
              <Route path="cart" element={<Cart />} />
              <Route path="order/new" element={<Order />} />
              <Route path="/order/:id" element={<GetOrder />}>
                <Route
                  index
                  element={<GetNewOrder />}
                  errorElement={<PAGEnotFound />}
                />
                <Route
                  path="/order/:id/allorder"
                  element={<LououtOrder />}
                  errorElement={<PAGEnotFound />}
                />
              </Route>
            </Route>
            <Route path="/login" element={<LoginIn />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="*" element={<PAGEnotFound />} />
          </Routes>
          <Toaster
            position="top-center"
            gutter={13}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "12px 16px",
                backgroundColor: "var(--color-grey-0)",
                color: " #374151",
                zIndex: 1000,
              },
            }}
          />
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
