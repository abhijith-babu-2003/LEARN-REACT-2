import React, { useState, useMemo } from 'react';

function SimpleCart() {
  const [cart, setCart] = useState([
    { name: 'Camera', price: 500 },
    { name: 'Lens', price: 3003323333334 }
  ]);
  
  const [couponCode, setCouponCode] = useState('');

  // useMemo is used here to avoid recalculating total on every render
  const total = useMemo(() => {
    console.log('Calculating total...');
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

//   const total = cart.reduce((sum, item) => {
//   console.log('Calculating total...');
//   return sum + item.price;
// }, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}> ₹{item.price}</li>
        ))}
      </ul>

      <p><strong>Total: ₹{total}</strong></p>

      <p>{couponCode}</p>
      <input
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
    </div>
  );
}

export default SimpleCart