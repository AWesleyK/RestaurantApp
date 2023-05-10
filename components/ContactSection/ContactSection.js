import React, { useEffect, useState } from 'react';
import styles from './ContactSection.module.scss';

const ContactSection = () => {
  const [storeLocations, setStoreLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/store-locations');
        if (response.ok) {
          const { data } = await response.json();
          setStoreLocations(data);
        } else {
          console.error('Error fetching store locations data:', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error fetching store locations data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactHeading}>Contact</h2>
      <div className={styles.locations}>
        {storeLocations.map((location) => (
          <div key={location.locationId} className={styles.locationCard}>
            <h3 className={styles.locationName}>{location.name}</h3>
            <address>
              {location.address.street}, {location.address.city},{' '}
              {location.address.state} {location.address.zipCode},{' '}
              {location.address.country}
            </address>
            <p>Phone: {location.phone}</p>
            <p>Email: {location.email}</p>
            <p>Opening Hours:</p>
            <ul className={styles.openingHours}>
              {location.openingHours.map((hours) => (
                <li key={hours.day}>
                  {hours.day}: {hours.open} - {hours.close}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
