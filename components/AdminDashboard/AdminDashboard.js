import React from 'react';
import Link from 'next/link';
import styles from './AdminDashboard.module.scss';

const AdminDashboard = () => {
  return (
    <div className={styles['admin-dashboard']}>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link href="/menu" className={styles.link}>
            Menu
          </Link>
        </li>
        <li>
          <Link href="/orders" className={styles.link}>
            Orders
          </Link>
        </li>
        <li>
          <Link href="/blogs" className={styles.link}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/store-locations" className={styles.link}>
            Store Locations
          </Link>
        </li>
      </ul>
      <div className={styles['logout-link']}>
        <Link href="/logout" className={styles.link}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
