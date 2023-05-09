import '../styles/globals.scss';
import styles from '../styles/_app.module.scss';


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.appContainer}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
