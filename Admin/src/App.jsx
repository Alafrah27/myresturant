// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Account from "./pages/Account";
import PAGEnotFound from "./pages/PAGEnotFound";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import AllUsers from "./pages/AllUsers";
import Category from "../src/pages/Category";
import ProductItem from "./pages/ProductItem";
import Users from "./pages/Users";
import SinglePage from "./features/signlePage/SinglePage";
import SingleOrder from "./features/Order/SingleOrder";
import PickUpOrder from "./pages/PickUpOrder";
// import { AuthUser } from "./features/LoginForm/Auth";
import ProtectRoute from "./protect/ProtectRoute";

function App() {
  // const { User } = AuthUser();
  // const navigate = useNavigate();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectRoute>
              <AppLayout />
            </ProtectRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route
            path="/order/:id"
            element={<SingleOrder />}
            errorElement={<PAGEnotFound />}
          />
          <Route path="/listitem" element={<ProductItem />} />
          <Route
            path="/listitem/:id"
            element={<SinglePage />}
            errorElement={<PAGEnotFound />}
          />

          <Route path="/category" element={<Category />} />
          <Route path="/users" element={<Users />} />
          <Route path="/account" element={<Account />} />
          <Route path="/getallusers" element={<AllUsers />} />
          <Route path="/pickup" element={<PickUpOrder />} />
        </Route>
        <Route path="/login" element={<Login />} />
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
            color: "var(--color-grey-700)",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
