import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id, delta) => {
    updateQuantity(id, delta);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart 🛍️</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty. Start adding some cool stuff!
        </p>
      ) : (
        <div className="cart-container">
          {/* Left Section - Cart Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-detail">
              <span>Total Items:</span>
              <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="summary-detail">
              <span>Total Price:</span>
              <span>₹{getTotal()}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
