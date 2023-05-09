import React from 'react';
import styles from './HomeSection.module.scss';

const HomeSection = () => {
  return (
    <section className={styles.homeSection}>
      <div className={styles.taglineContainer}>
        <h1 className={styles.tagline}>Come on in and chase the flavor</h1>
        <p className={styles.catchphrase}>Online Curbside Ordering Now Available!</p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/Restaurant.png" alt="Restaurant" className={styles.restaurantImage} />
      </div>
    </section>
  );
};

export default HomeSection;
