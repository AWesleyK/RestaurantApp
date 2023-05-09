import React, { useEffect, useState } from 'react';
import styles from './MenuSection.module.scss';

const MenuSection = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/menu');
        if (response.ok) {
          const { data } = await response.json();
          setMenuData(data);
        } else {
          console.error('Error fetching menu data:', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchData();
  }, []);


  const appetizers = menuData.filter((item) => item.menu === 'Appetizers');
  const entrees = menuData.filter((item) => item.menu === 'Entrees');
  const drinks = menuData.filter((item) => item.menu === 'Drinks');
  const desserts = menuData.filter((item) => item.menu === 'Desserts');

  return (
    <section className={styles.menuSection}>
      <div className={styles.leftColumn}>
        <h2>Appetizers</h2>
        <ul className={styles.menuList}>
          {appetizers.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
        <h2>Entrees</h2>
        <ul className={styles.menuList}>
          {entrees.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.picture}>
        <img src="/images/menu_images/menubackground.png" alt="Delicious food" />
      </div>
      <div className={styles.rightColumn}>
        <h2>Drinks</h2>
        <ul className={styles.menuList}>
          {drinks.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
        <h2>Desserts</h2>
        <ul className={styles.menuList}>
          {desserts.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MenuSection;
