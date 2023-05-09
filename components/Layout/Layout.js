import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar'; // Add this import
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Restaurant demo website" />
        <title>Restaurant Demo</title>
      </Head>
      <Header />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
