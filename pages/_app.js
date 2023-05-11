import '../styles/globals.scss';
import styles from '../styles/_app.module.scss';
import AuthProvider from '../components/AuthProvider/AuthProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className={styles.appContainer}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
