import React, { useState } from 'react';
import styles from './OrderSection.module.scss';

const OrderSection = () => {
  const [orderItems, setOrderItems] = useState([]);

  const addItemToOrder = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const renderOrderItems = () => (
    <ul className={styles.orderList}>
      {orderItems.map((item, index) => (
        <li key={index} className={styles.orderItem}>
          <span>{item.name}</span>
          <span className={styles.separator} />
          <span>${item.price}</span>
        </li>
      ))}
    </ul>
  );

  const getTotal = () => {
    return orderItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className={styles.orderSection}>
      <h1>Order Now</h1>
      {renderOrderItems()}
      <p>Total: ${getTotal().toFixed(2)}</p>
      {/* Implement checkout functionality */}
    </div>
  );
};

export default OrderSection;
