// pages/login.js
/*import { useContext } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    const router = useRouter();
    router.push('/admin');
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
*/


// pages/login.js
// pages/login.js
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../components/Admin/AuthProvider/AuthProvider';
import LoginForm from '../../components/LoginForm/LoginForm';
import Layout from '../../components/Header/Header';

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = (data) => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/admin');
    }
  }, [isLoggedIn, router]);

  return (
    
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
