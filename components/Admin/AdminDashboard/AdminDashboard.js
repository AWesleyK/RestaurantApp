import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './AdminDashboard.module.scss';
import { AuthContext } from '../AuthProvider/AuthProvider';



const AdminDashboard = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/admin/login');
  };

  return (
    <div className={styles['admin-dashboard']}>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link href="/admin/menu" className={styles.link}>
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
  <a onClick={handleLogout} className={styles.link}>
    Logout
  </a>
</div>

    </div>
  );
};

export default AdminDashboard;
