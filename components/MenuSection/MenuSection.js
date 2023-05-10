import React, { useEffect, useState } from 'react';
import styles from './MenuSection.module.scss';
import Link from 'next/link'; // Import Next.js's Link component

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

  const renderMenuItems = (category) => (
    <ul className={styles.menuList}>
      {category.items
        .filter((item) => item.isActive)
        .map((item) => (
          <li key={item.name} className={styles.menuItem}>
            <Link href={`/menu-detail/${item.name}`} className={styles.menuItemLink}>
              <span className={styles.menuItemLink}>
                <span>{item.name}</span>
                <span className={styles.separator} />
                <span>${item.price}</span>
              </span>
            </Link>
          </li>
        ))}
    </ul>
  );

  const appetizers = menuData.find((item) => item.menu === 'Appetizers');
  const entrees = menuData.find((item) => item.menu === 'Entrees');
  const drinks = menuData.find((item) => item.menu === 'Drinks');
  const desserts = menuData.find((item) => item.menu === 'Desserts');

  return (
    <section className={styles.menuSection}>
      <div className={styles.menuTitleWrapper}>
        <h1 className={styles.menuTitle}>Menu</h1>
      </div>
      <div className={styles.mainContent}> {/* Add this line */}
        <div className={styles.leftColumn}>
          <h2>Appetizers</h2>
          {appetizers && renderMenuItems(appetizers)}
          <h2>Entrees</h2>
          {entrees && renderMenuItems(entrees)}
        </div>
        <div className={styles.picture}>
          <img src="/images/menu_images/menubackground.png" alt="Delicious food" />
        </div>
        <div className={styles.rightColumn}>
          <h2>Drinks</h2>
          {drinks && renderMenuItems(drinks)}
          <h2>Desserts</h2>
          {desserts && renderMenuItems(desserts)}
        </div>
      </div>
    </section>
  );
  };

export default MenuSection;
