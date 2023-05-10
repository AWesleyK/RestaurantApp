import React from 'react';
import styles from './MenuDetail.module.scss';

const MenuDetail = ({ item }) => {
  return (
    <div className={styles.menuDetail}>
      <h1 className={styles.menuItemName}>{item.name}</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={item.image} alt={item.name} className={styles.menuItemImage} />
        </div>
        <div className={styles.menuItemInfo}>
          <div className={styles.priceContainer}>
            <h3>Price:</h3>
            <p>
              <span>${item.price}</span>
            </p>
          </div>
          <h3>Description:</h3>
          <p>
            <span>{item.detail}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
