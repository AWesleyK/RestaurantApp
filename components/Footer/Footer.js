import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBar}>
        Powered By{' '}
        <span className={styles.awkward}>
          AWKward Studios <img src={'./images/AWKwardLogo.png'} alt="AWKward Studios Logo" className={styles.logo} />
        </span>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/link_images/f.png" alt="Facebook" className={styles.socialLink} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/link_images/IG.png" alt="Instagram" className={styles.socialLink} />
        </a>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.boxesContainer}>
          <div className={styles.box}></div>
          <img src={'./images/logobig.png'} alt="Restaurant Logo" className={styles.restaurantLogo} />
          <div className={styles.box}></div>
        </div>
        <div className={styles.contactInfo}>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
