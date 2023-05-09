import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const navbarHeight = document.getElementById('navbar').clientHeight;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > navbarHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}
    >
      <div><img className={styles.logo} src="/images/demologo.png" alt="Logo" onClick={scrollToTop} /></div>
 	<div className={styles.linksContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a
            href="#home"
            className={styles.navLink}
            onClick={(e) => scrollToSection(e, 'home')}
            data-hover-text="Home"
          >
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#about"
            className={styles.navLink}
            onClick={(e) => scrollToSection(e, 'about')}
            data-hover-text="About"
          >
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#menu"
            className={styles.navLink}
            onClick={(e) => scrollToSection(e, 'menu')}
            data-hover-text="Menu"
          >
            Menu
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#blog"
            className={styles.navLink}
            onClick={(e) => scrollToSection(e, 'blog')}
            data-hover-text="Blog"
          >
            Blog
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#testimonials"
            className={styles.navLink}
            onClick={(e) => scrollToSection(e, 'testimonials')}
            data-hover-text="Testimonials"
          >
            Testimonials
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#apply"
            className={styles.navLink}
            onClick={(e) => scrollToSection(e, 'apply')}
            data-hover-text="Apply"
          >
            Apply
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#contact"
            className={styles.navLink}
            onClick={(e) => scrollToSection(e, 'contact')}
            data-hover-text="Contact"
          >
            Contact
          </a>
        </li>
	</ul>
  </div>
	<div className={styles.orderButtonContainer}>
          <button className={styles.orderButton}>
            Order Online!
          </button>
        </div>
    </nav>
  );
};

export default Navbar;
