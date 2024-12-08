import { useState } from "react";
import { AuthUser, CreateOrder } from "../service/Apis"; // Ensure this imports the correct method
import { UseCartApi } from "../context/CartContext";
import EmptyCart from "../Componenet/EmptyCart";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Order() {
  // State for user input
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const { createOrder } = CreateOrder(); // Make sure this is defined correctly in your service
  const { cart, clearItems } = UseCartApi();
  const { User } = AuthUser();
  const navigate = useNavigate();

  // Handle order creation
  async function handleCreateOrder(e) {
    e.preventDefault();
    if (!name || !address || !phone || !city) {
      toast.error("Please fill all the fields"); // Check for empty fields
    }

    // Construct the cart as required by the backend
    const itemsInCart = cart?.map((item) => ({
      product: item.pizzaId, // Assuming this is correct
      quantity: item.quantity,
      price: item.price, // Price included if needed
    }));

    // Ensure itemsInCart is not empty
    if (!itemsInCart.length) {
      alert("Cart cannot be empty."); // This prevents you from sending an empty cart
      return;
    }

    // Construct the order data with both user info and the cart
    const orderData = {
      // Replace with actual user ID from your auth context

      cart: itemsInCart,
      name,
      city,
      phone,
      address,
      // Optionally calculate totalPrice
    };

    // Log the order data to see what is being sent
    console.log("Order Data:", orderData);

    // Send the complete order data to createOrder
    createOrder(orderData);
    clearItems();
  }

  // Show EmptyCart component if the cart is empty
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="bg-white p-4 my-4 w-[400px] mx-auto">
      <h2 className="text-3xl font-bold px-6 text-slate-500 py-4 my-1">
        Are you ready to order? Lets go!!
      </h2>
      <form onSubmit={handleCreateOrder} className="flex flex-col gap-4 p-10">
        <div className="flex flex-col gap-5">
          <label className="text-gray-500">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            className="px-3 py-4 w-full focus:outline-none border-2 border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-gray-500">City</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter Your City"
            className="px-3 py-4 w-full focus:outline-none border-2 border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-gray-500">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter Your Address"
            className="px-3 py-4 w-full focus:outline-none border-2 border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-gray-500">Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Enter Your Phone Number"
            className="px-3 py-4 w-full focus:outline-none border-2 border-gray-300 rounded-sm"
          />
        </div>
        {!User ? (
          navigate("/login")
        ) : (
          <button
            type="submit"
            className="px-3 py-6 w-full bg-[#3E3322] border border-none focus:outline-none text-white text-1xl font-bold rounded-sm"
          >
            Create Order
          </button>
        )}
      </form>
    </div>
  );
}

export default Order;
