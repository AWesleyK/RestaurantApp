import React, { useEffect, useState } from 'react';
import styles from './BlogSection.module.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (response.ok) {
          const { data } = await response.json();
          setBlogData(data);
        } else {
          console.error('Error fetching blog data:', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.blogSection}>
      <div className={styles.carouselContainer}>
      <h2 className={styles.blogHeading}>Blogs</h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={10000}
        stopOnHover={true}
      >
{blogData.map((blog) => (
  <div key={blog._id}>
    <div className={styles.blogContainer}>
      <div className={styles.blogHeader}>
        <h3 className={styles.blogTitle}>{blog.title}</h3>
        <p className={styles.blogDate}>{blog.date}</p>
      </div>
      <p className={styles.blogContent}>{blog.blog}</p>
    </div>
  </div>
))}

      </Carousel>
      </div>
    </section>
  );
};

export default BlogSection;
