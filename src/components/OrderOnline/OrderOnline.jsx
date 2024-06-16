// import React from 'react'
// import './OrderOnline.css'
// import { images } from '../../constants';

// function OrderOnline() {
//   return (
//     <div className='app__order-online'>
//         <h1>Under Construction...</h1>
//     </div>
//   )
// }

// export default OrderOnline;

import React, { useState } from 'react';
import './OrderOnline.css';

function OrderOnline() {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    address: '',
    orderDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', order);
    // Add functionality to handle order submission
    alert('Order submitted successfully!');
  };

  return (
    <div className='app__order-online'>
      <h1>Order Online</h1>
      <form className='order-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={order.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={order.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
            value={order.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='orderDetails'>Order Details:</label>
          <textarea
            id='orderDetails'
            name='orderDetails'
            value={order.orderDetails}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type='submit'>Submit Order</button>
      </form>
    </div>
  );
}

export default OrderOnline;
