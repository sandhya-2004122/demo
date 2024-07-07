import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product;
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const totalAmount = product.price * quantity;

  const handleOrder = () => {
    if (paymentMode === 'cod') {
      alert('Order placed successfully!');
      navigate('/shop');
    } else if (paymentMode === 'gpay') {
      const pin = prompt('Enter your GPay PIN:');
      if (pin) {
        alert('Payment successful and order placed!');
        navigate('/shop');
      }
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="checkout-details">
          <p>Product: {product.name}</p>
          <p>Price: RS.{product.price}</p>
          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
          <p>Total Amount: RS.{totalAmount}</p>
        </div>
        <div className="checkout-form">
          <label>
            Address:
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <div>
            <label>
              <input
                type="radio"
                value="cod"
                checked={paymentMode === 'cod'}
                onChange={() => setPaymentMode('cod')}
              />
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                value="gpay"
                checked={paymentMode === 'gpay'}
                onChange={() => setPaymentMode('gpay')}
              />
              GPay
            </label>
          </div>
          <button onClick={handleOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
