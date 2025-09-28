import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cart, getTotal, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("🎉 Order placed successfully!");
    // Clear cart
    cart.forEach((item) => removeFromCart(item.id));
    navigate("/"); 
  };

  return (
    <div className="checkout-page">
      <h2>Checkout 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="checkout-container">
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div className="checkout-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity}</p>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <p>Total Items: {cart.reduce((acc, i) => acc + i.quantity, 0)}</p>
            <p>Total Price: ₹{cart.reduce((acc, i) => acc + i.price * i.quantity, 0)}</p>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order ✅
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
