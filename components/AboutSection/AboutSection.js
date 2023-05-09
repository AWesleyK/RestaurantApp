import React from 'react';
import styles from './AboutSection.module.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutSection = () => {
  const images = [
    '/images/menu_images/bbqburger.png',
    '/images/menu_images/cheeseburger.png',
    '/images/menu_images/pizzaburger.png',
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.taglineContainer}>
          <h2 className={styles.tagline}>About Us</h2>
          <p className={styles.catchphrase}>
            Howdy! We're your local hangout spot for all gamedays and major sporting events. We've got great food and even greater drinks. Come on in for a mixture
            of family fun and much more.
          </p>
        </div>
        <div className={styles.slider}>
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Menu image ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
